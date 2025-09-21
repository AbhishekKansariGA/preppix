
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight, LogOut, User, Settings, HelpCircle, Languages } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export default function AccountPage() {
  const { user, isAuthenticated, isAuthInitialized, logout } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);
  
  if (!isAuthInitialized || !isAuthenticated || !user) {
    return null;
  }
  
  return (
    <div className="space-y-8">
        <div className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 text-3xl mb-4 border-2 border-primary">
              <AvatarImage src={`https://api.dicebear.com/8.x/initials/svg?seed=${user.username}`} />
              <AvatarFallback className="bg-primary/10">{user.username?.[0]?.toUpperCase()}</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold">{user.username}</h1>
            <div className="flex items-center gap-2 mt-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-muted-foreground">Happy</span>
            </div>
        </div>

        <div className="space-y-2">
            <MenuItem icon={Settings} label="Settings" />
            <MenuItem icon={Languages} label="Language" />
            <MenuItem icon={HelpCircle} label="FAQ" />
        </div>

        <Button variant="ghost" onClick={logout} className="w-full text-red-400 hover:bg-red-900/40 hover:text-red-300 mt-8 justify-start p-4 text-base">
            <LogOut className="mr-3 h-5 w-5" />
            Logout
        </Button>
    </div>
  );
}

const MenuItem = ({ icon: Icon, label }: { icon: React.ElementType, label: string }) => {
    return (
         <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-card">
            <div className="flex items-center gap-4">
                <Icon className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">{label}</span>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>
    )
}
