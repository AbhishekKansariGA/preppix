
'use client';

import { Suspense } from 'react';
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
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { Loader } from '@/components/ui/loader';

const DUMMY_OTP = "123456";

const formSchema = z.object({
  otp: z.string().length(6, {
    message: 'OTP must be 6 digits.',
  }),
});

function OTPVerificationComponent() {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false);

  const username = searchParams.get('username');
  const mobile = searchParams.get('mobile');
  const preparingExam = searchParams.get('preparingExam');
  const [password, setPassword] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    const tempPassword = sessionStorage.getItem('tempPassword');
    if (tempPassword) {
      setPassword(tempPassword);
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.otp === DUMMY_OTP) {
      if (username && password && mobile && preparingExam) {
        login(username, password, mobile, preparingExam);
        sessionStorage.removeItem('tempPassword');
        toast({
          title: 'Success',
          description: 'You have been successfully logged in.',
        });
        router.push('/');
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Something went wrong. Please try signing up again.',
        });
        router.push('/login');
      }
    } else {
      toast({
        variant: 'destructive',
        title: 'Invalid OTP',
        description: 'The OTP you entered is incorrect. Please try again.',
      });
      form.setError('otp', { message: 'Invalid OTP' });
    }
  }

  if (!isClient) {
    return <div className="flex justify-center items-center h-screen"><Loader /></div>;
  }
  
  if (!username || !mobile || !preparingExam || !password) {
      // Redirect back if essential data is missing
      if (isClient) {
          router.replace('/login');
      }
      return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold font-poppins">Verify OTP</CardTitle>
          <CardDescription>
            An OTP has been sent to your mobile number {mobile}. 
            For this demo, the OTP is <span className='font-bold text-primary'>{DUMMY_OTP}</span>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter OTP</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Verify OTP
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function OTPPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen"><Loader /></div>}>
      <OTPVerificationComponent />
    </Suspense>
  );
}
