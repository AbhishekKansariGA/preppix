
'use client';
import Link from 'next/link';
import { notFound, useRouter, useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getExamById, subjects } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/ui/loader';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default function ExamTypePage() {
  const params = useParams();
  const examType = Array.isArray(params.examType) ? params.examType[0] : params.examType;
  const exam = getExamById(examType);
  const { isAuthenticated, isAuthInitialized } = useAuth();
  const router = useRouter();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  if (!isAuthInitialized || !isAuthenticated) {
    return <Loader text="Loading subjects..." />;
  }
  
  if (!exam) {
    notFound();
  }

  const handleStartTest = () => {
    if (selectedSubject) {
      const href = selectedSubject === 'maths' 
        ? `/tests/${exam.id}/maths`
        : `/tests/${exam.id}/${selectedSubject}/test?lang=${selectedLanguage}`;
      router.push(href);
      setIsDialogOpen(false);
    }
  };
  
  const openDialog = (subjectId: string) => {
    if (subjectId === 'maths') {
        router.push(`/tests/${exam.id}/maths`);
        return;
    }
    setSelectedSubject(subjectId);
    setSelectedLanguage('en');
    setIsDialogOpen(true);
  }


  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-poppins">
          {exam.name} Mock Tests
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose a subject to begin your test.
        </p>
      </div>
       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {subjects.map(subject => (
              <DialogTrigger asChild key={subject.id} onSelect={() => openDialog(subject.id)}>
                <Card className="h-full transform transition-all duration-300 hover:scale-105 bg-secondary/30 hover:bg-secondary/60 hover:shadow-primary/20 hover:shadow-lg cursor-pointer group">
                  <CardHeader className='items-center text-center'>
                    <div className='p-4 bg-primary/10 rounded-full mb-4'>
                      <subject.icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-semibold">{subject.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mt-2 flex items-center justify-center text-primary font-semibold">
                      <span>Start Test</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
            ))}
        </div>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Choose Test Language</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
                <RadioGroup defaultValue="en" onValueChange={setSelectedLanguage}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="en" id="lang-en" />
                        <Label htmlFor="lang-en">English</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hi" id="lang-hi" />
                        <Label htmlFor="lang-hi">Hindi</Label>
                    </div>
                </RadioGroup>
            </div>
            <Button onClick={handleStartTest}>Confirm & Start Test</Button>
        </DialogContent>
       </Dialog>
    </div>
  );
}

