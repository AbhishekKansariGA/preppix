
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { PenSquare } from 'lucide-react';
import { useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { exams } from '@/lib/data';

const strongPassword = new RegExp(
  '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
);
const indianMobileRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().regex(strongPassword, {
    message:
      'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.',
  }),
  mobile: z.string().regex(indianMobileRegex, {
    message: 'Please enter a valid Indian mobile number.',
  }),
  preparingExam: z.string().min(1, { message: 'Please select an exam.' }),
});

export default function LoginPage() {
  const { login, isAuthenticated, isAuthInitialized } = useAuth();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      mobile: '',
      preparingExam: '',
    },
  });

  useEffect(() => {
    if (isAuthInitialized && isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, isAuthInitialized, router]);


  function onSubmit(values: z.infer<typeof formSchema>) {
    login(values.username, values.mobile, values.preparingExam);
    router.push('/');
  }
  
  if (isAuthInitialized && isAuthenticated) {
    return null; // or a loading indicator
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md border-secondary bg-secondary/30">
        <CardHeader className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <PenSquare className="h-8 w-8 text-primary" />
            </div>
          <CardTitle className="text-3xl font-bold font-poppins text-foreground">Welcome to ExamPrep Ace</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Your username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Indian mobile number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="preparingExam"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preparing For</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select an exam" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {exams.map(exam => (
                            <SelectItem key={exam.id} value={exam.name}>{exam.name}</SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Sign In
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
