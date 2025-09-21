
'use client';

import { useTestStore } from '@/hooks/use-test-store';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { format } from 'date-fns';
import { History, ArrowRight, BarChart, FileText, LogOut, User, Edit, CalendarIcon } from 'lucide-react';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

const profileSchema = z.object({
  dob: z.date().optional(),
  preparingExam: z.string().optional(),
  qualifications: z.string().optional(),
  category: z.string().optional(),
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
      dob: user?.dob ? new Date(user.dob) : undefined,
      preparingExam: user?.preparingExam || '',
      qualifications: user?.qualifications || '',
      category: user?.category || '',
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
            dob: user.dob ? new Date(user.dob) : undefined,
            preparingExam: user.preparingExam || '',
            qualifications: user.qualifications || '',
            category: user.category || '',
        });
    }
  }, [user, form]);

  if (!isInitialized || !isAuthInitialized || !isAuthenticated || !user) {
    return null;
  }
  
  const handleProfileUpdate = (values: ProfileFormValues) => {
    updateUser({
        ...values,
        dob: values.dob?.toISOString()
    });
    setIsEditDialogOpen(false);
  };

  const testName = (a: typeof attempts[0]) => {
      let name = `${a.examName} - ${a.subjectName}`;
      if (a.chapterName) {
        name += ` (${a.chapterName})`;
      }
      return name;
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <Card className="w-full md:w-1/3 border-secondary bg-secondary/30">
          <CardHeader className="items-center text-center">
            <Avatar className="h-24 w-24 text-3xl mb-4 border-2 border-primary">
              <AvatarFallback className="bg-primary/10">{user.username?.[0]?.toUpperCase()}</AvatarFallback>
            </Avatar>
            <CardTitle>{user.username}</CardTitle>
            <CardDescription>{user.mobile}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Date of Birth:</span>
              <span className="font-medium">{user.dob ? format(new Date(user.dob), 'PPP') : 'N/A'}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Preparing for:</span>
              <span className="font-medium">{user.preparingExam || 'N/A'}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">Qualifications:</span>
              <span className="font-medium text-right">{user.qualifications || 'N/A'}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">Category:</span>
              <span className="font-medium">{user.category || 'N/A'}</span>
            </div>
             <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full mt-4">
                  <Edit className="mr-2 h-4 w-4" /> Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="border-secondary bg-background">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(handleProfileUpdate)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              captionLayout="dropdown-buttons"
                              fromYear={1960}
                              toYear={new Date().getFullYear()}
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />
                  <div>
                    <Label htmlFor="preparingExam">Preparing For</Label>
                    <Input id="preparingExam" {...form.register('preparingExam')} />
                  </div>
                  <FormField
                      control={form.control}
                      name="qualifications"
                      render={({ field }) => (
                        <FormItem>
                          <Label>Qualifications</Label>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your qualification" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="10TH">10TH</SelectItem>
                              <SelectItem value="12TH">12TH</SelectItem>
                              <SelectItem value="GRADUATE">GRADUATE</SelectItem>
                              <SelectItem value="POST GRADUATE">POST GRADUATE</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <Label>Category</Label>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="UR">UR (Unreserved)</SelectItem>
                              <SelectItem value="EWS">EWS (Economically Weaker Section)</SelectItem>
                              <SelectItem value="OBC">OBC (Other Backward Class)</SelectItem>
                              <SelectItem value="SC">SC (Scheduled Caste)</SelectItem>
                              <SelectItem value="ST">ST (Scheduled Tribe)</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  <DialogFooter>
                    <Button type="submit" className="bg-primary text-primary-foreground">Save Changes</Button>
                  </DialogFooter>
                </form>
                </Form>
              </DialogContent>
            </Dialog>
            <Button variant="ghost" onClick={logout} className="w-full text-red-400 hover:bg-red-900/40 hover:text-red-300 mt-2">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </CardContent>
        </Card>

        <div className="w-full md:w-2/3">
          <div className="flex items-center gap-3 mb-6">
            <History className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              My Past Attempts
            </h2>
          </div>
          {attempts.length === 0 ? (
            <Card className="text-center py-16 border-dashed border-secondary">
              <CardHeader>
                <CardTitle>No attempts yet!</CardTitle>
                <CardDescription>
                  Start a new mock test to see your history here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="bg-primary text-primary-foreground">
                  <Link href="/">
                    <FileText className="mr-2 h-4 w-4" /> Go to Mock Tests
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {attempts.map((attempt, index) => {
                  return (
                    <Link href={`/results/${attempt.id}`} key={`${attempt.id}-${index}`}>
                      <Card className="group transition-all bg-secondary/30 hover:bg-secondary/60 hover:shadow-primary/20 hover:shadow-md hover:border-secondary">
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                             <div className="p-3 rounded-md bg-primary/10 text-primary">
                                <BarChart className="h-6 w-6" />
                             </div>
                             <div>
                              <p className="font-semibold text-lg">
                                {attempt.examName} - {attempt.subjectName}
                                {attempt.chapterName && <span className="text-primary font-poppins"> ({attempt.chapterName})</span>}
                              </p>
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
                  )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

    
