
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { exams } from '@/lib/data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LogOut } from 'lucide-react';

const formSchema = z.object({
    dob: z.string().optional(),
    qualifications: z.string().optional(),
    category: z.string().optional(),
    preparingExam: z.string().optional(),
});

export default function AccountPage() {
  const { user, isAuthenticated, isAuthInitialized, updateUser, logout } = useAuth();
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dob: user?.dob || '',
      qualifications: user?.qualifications || '',
      category: user?.category || '',
      preparingExam: user?.preparingExam || '',
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
        dob: user.dob || '',
        qualifications: user.qualifications || '',
        category: user.category || '',
        preparingExam: user.preparingExam || '',
      });
    }
  }, [user, form]);
  
  if (!isAuthInitialized || !isAuthenticated || !user) {
    return null;
  }
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    updateUser(values);
    toast({
        title: "Profile Updated",
        description: "Your information has been saved successfully.",
    });
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
        <div className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 text-3xl mb-4">
              <AvatarImage src={`https://api.dicebear.com/8.x/initials/svg?seed=${user.username}`} />
              <AvatarFallback>{user.username?.[0]?.toUpperCase()}</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold">{user.username}</h1>
            <p className="text-muted-foreground">{user.mobile}</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details here.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="dob"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date of Birth</FormLabel>
                                <FormControl>
                                <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="qualifications"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Highest Qualification</FormLabel>
                                <FormControl>
                                <Input placeholder="e.g., B.Tech" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                 <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                        <SelectValue placeholder="Select your category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="general">General</SelectItem>
                                        <SelectItem value="obc">OBC</SelectItem>
                                        <SelectItem value="sc">SC</SelectItem>
                                        <SelectItem value="st">ST</SelectItem>
                                        <SelectItem value="ews">EWS</SelectItem>
                                    </SelectContent>
                                </Select>
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
                    </div>
                    <Button type="submit">Save Changes</Button>
                </form>
                </Form>
            </CardContent>
        </Card>
        <div className='text-center'>
            <Button variant="destructive" onClick={() => logout()}>
                <LogOut className="mr-2 h-4 w-4" />
                Log Out
            </Button>
        </div>
    </div>
  );
}
