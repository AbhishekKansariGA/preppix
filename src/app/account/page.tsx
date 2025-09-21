
'use client';

import { useTestStore } from '@/hooks/use-test-store';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { format } from 'date-fns';
import { History, ArrowRight, BarChart, FileText, LogOut, User, Edit } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const profileSchema = z.object({
  age: z.string().optional(),
  preparingExam: z.string().optional(),
  qualifications: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function AccountPage() {
  const { attempts, isInitialized } = useTestStore();
  const { user, isAuthenticated, isAuthInitialized, logout, updateUser } = useAuth();
  const router = useRouter();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      age: user?.age || '',
      preparingExam: user?.preparingExam || '',
      qualifications: user?.qualifications || '',
    },
  });

  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);
  
  useEffect(() => {
    if (user) {
        form.reset({
            age: user.age || '',
            preparingExam: user.preparingExam || '',
            qualifications: user.qualifications || '',
        });
    }
  }, [user, form]);

  if (!isInitialized || !isAuthInitialized || !isAuthenticated || !user) {
    return <div>Loading...</div>;
  }
  
  const handleProfileUpdate = (values: ProfileFormValues) => {
    updateUser(values);
    setIsEditDialogOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <Card className="w-full md:w-1/3">
          <CardHeader className="items-center text-center">
            <Avatar className="h-24 w-24 text-3xl mb-4">
              <AvatarFallback>{user.username?.[0]?.toUpperCase()}</AvatarFallback>
            </Avatar>
            <CardTitle>{user.username}</CardTitle>
            <CardDescription>{user.mobile}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Age:</span>
              <span className="font-medium">{user.age || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Preparing for:</span>
              <span className="font-medium">{user.preparingExam || 'N/A'}</span>
            </div>
            <div className="flex justify-between text-right">
              <span className="text-muted-foreground">Qualifications:</span>
              <span className="font-medium ">{user.qualifications || 'N/A'}</span>
            </div>
             <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full mt-4">
                  <Edit className="mr-2 h-4 w-4" /> Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(handleProfileUpdate)} className="space-y-4">
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" {...form.register('age')} />
                  </div>
                  <div>
                    <Label htmlFor="preparingExam">Preparing For</Label>
                    <Input id="preparingExam" {...form.register('preparingExam')} />
                  </div>
                  <div>
                    <Label htmlFor="qualifications">Qualifications</Label>
                    <Input id="qualifications" {...form.register('qualifications')} />
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save Changes</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="ghost" onClick={logout} className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </CardContent>
        </Card>

        <div className="w-full md:w-2/3">
          <div className="flex items-center gap-3 mb-4">
            <History className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              My Past Attempts
            </h2>
          </div>
          {attempts.length === 0 ? (
            <Card className="text-center py-16">
              <CardHeader>
                <CardTitle>No attempts yet!</CardTitle>
                <CardDescription>
                  Start a new mock test to see your history here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="/">
                    <FileText className="mr-2 h-4 w-4" /> Go to Mock Tests
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {attempts.map(attempt => (
                <Link href={`/results/${attempt.id}`} key={attempt.id}>
                  <Card className="group transition-all hover:bg-card/80 hover:shadow-primary/20 hover:shadow-md">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="p-3 rounded-md bg-primary/10 text-primary">
                            <BarChart className="h-6 w-6" />
                         </div>
                         <div>
                          <p className="font-semibold text-lg">{attempt.examName} - {attempt.subjectName}</p>
                          <p className="text-sm text-muted-foreground">
                            {format(new Date(attempt.date), 'MMMM d, yyyy - h:mm a')}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                           <p className="text-sm text-muted-foreground">Score</p>
                           <p className="font-bold text-xl text-primary">{attempt.scoreDetails.score.toFixed(2)}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
