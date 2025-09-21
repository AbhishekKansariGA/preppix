
'use client';
import Link from 'next/link';
import { notFound, useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getExamById, getSubjectById } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/ui/loader';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function MathsChapterPage() {
  const params = useParams();
  const router = useRouter();
  const examType = Array.isArray(params.examType) ? params.examType[0] : params.examType;
  const exam = getExamById(examType);
  const subject = getSubjectById('maths');
  const { isAuthenticated, isAuthInitialized } = useAuth();
  
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  if (!isAuthInitialized || !isAuthenticated) {
    return <Loader text="Loading chapters..." />;
  }

  if (!exam || !subject || !subject.chapters) {
    notFound();
  }
  
  const handleStartTest = () => {
    if (selectedChapter) {
      const href = `/tests/${exam.id}/maths/${selectedChapter}?lang=${selectedLanguage}`;
      router.push(href);
      setIsDialogOpen(false);
    }
  };

  const openDialog = (chapterId: string) => {
    setSelectedChapter(chapterId);
    setSelectedLanguage('en');
    setIsDialogOpen(true);
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-poppins">
          {exam.name} - {subject.name} Chapters
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose a chapter to start the test.
        </p>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subject.chapters.map((chapter) => (
             <DialogTrigger asChild key={chapter.id} onSelect={() => openDialog(chapter.id)}>
                <Card className="h-full transform transition-all duration-300 hover:scale-105 bg-secondary/30 hover:bg-secondary/60 hover:shadow-primary/20 hover:shadow-lg cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{chapter.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mt-4 flex items-center justify-between text-primary font-semibold">
                      <span>Start Test</span>
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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

