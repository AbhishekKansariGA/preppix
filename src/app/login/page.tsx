
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { exams } from '@/lib/data';
import { useEffect } from 'react';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long.' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter.' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
    .regex(/[^A-Za-z0-9]/, { message: 'Password must contain at least one special character.' }),
  mobile: z
    .string()
    .length(10, { message: 'Mobile number must be 10 digits.' })
    .regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid Indian mobile number.' }),
  preparingExam: z.string({
    required_error: 'Please select an exam.',
  }),
});

export default function LoginPage() {
  const { isAuthenticated, isAuthInitialized } = useAuth();
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
    const query = new URLSearchParams({
        username: values.username,
        mobile: values.mobile,
        preparingExam: values.preparingExam,
    }).toString();

    // Store password temporarily to avoid passing it in URL
    sessionStorage.setItem('tempPassword', values.password);

    router.push(`/otp-verify?${query}`);
  }
  
  if (isAuthInitialized && isAuthenticated) {
    return null; // or a loading indicator
  }

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold font-poppins">Welcome</CardTitle>
          <CardDescription>Enter your details to start your preparation journey</CardDescription>
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
                      <Input placeholder="Enter your username" {...field} autoComplete="off" />
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
                    <FormLabel>Strong Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} autoComplete="new-password" />
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
                    <FormLabel>Indian Mobile Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Enter your mobile number"
                        {...field}
                        autoComplete="off"
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
                    <FormLabel>Preparing for</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an exam" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {exams.map((exam) => (
                          <SelectItem key={exam.id} value={exam.id}>
                            {exam.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Get OTP
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
