
'use client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Bell, Search, Play, Moon, Sun, Wind } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const { user, isAuthenticated, isAuthInitialized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  if (!isAuthInitialized || !isAuthenticated) {
    return null;
  }

  return (
    <div className="space-y-8">
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold text-foreground font-poppins">Hello, {user?.username || 'Guest'} 👋</h1>
                <p className="text-muted-foreground">Welcome to your serene space.</p>
            </div>
            <Bell className="h-6 w-6 text-muted-foreground" />
        </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search..." className="w-full pl-12 h-14 bg-card border-0 rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-primary text-primary-foreground p-6 flex flex-col justify-between">
            <CardHeader className="p-0">
                <CardTitle className="text-2xl">Emotional Balance</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-8 flex justify-between items-center">
                <p>15 min</p>
                <button className="bg-primary-foreground text-primary rounded-full p-3">
                    <Play className="h-5 w-5 fill-primary"/>
                </button>
            </CardContent>
        </Card>
         <Card className="bg-[#A0D7E7] text-black p-6 flex flex-col justify-between">
            <CardHeader className="p-0">
                <CardTitle className="text-2xl">Calm Relaxation</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-8 flex justify-between items-center">
                <p>12 min</p>
                <button className="bg-black text-white rounded-full p-3">
                    <Play className="h-5 w-5 fill-white"/>
                </button>
            </CardContent>
        </Card>
      </div>
      
      <div>
        <h3 className="text-xl font-bold tracking-tight text-foreground mb-4">
          Special for you
        </h3>
        <div className="space-y-4">
            <SpecialCard 
                icon={Moon} 
                title="Morning Gratitude" 
                duration="5 min" 
                category="Morning"
                color="bg-blue-200"
                textColor="text-blue-900"
            />
            <SpecialCard 
                icon={Sun} 
                title="Serenity Before Sleep" 
                duration="10 min" 
                category="Evening"
                color="bg-yellow-200"
                textColor="text-yellow-900"
            />
             <SpecialCard 
                icon={Wind} 
                title="Mindful Breathing" 
                duration="7 min" 
                category="Anxiety"
                color="bg-green-200"
                textColor="text-green-900"
            />
        </div>
      </div>
    </div>
  );
}

function SpecialCard({ icon: Icon, title, duration, category, color, textColor }: { icon: React.ElementType, title: string, duration: string, category: string, color: string, textColor: string }) {
    return (
        <Card className="bg-card flex items-center p-4">
            <div className={`p-4 rounded-lg ${color} ${textColor}`}>
                <Icon className="h-6 w-6" />
            </div>
            <div className="ml-4 flex-grow">
                <p className="font-semibold text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{duration} • {category}</p>
            </div>
             <button className="bg-secondary rounded-full p-3">
                <Play className="h-5 w-5 fill-foreground"/>
            </button>
        </Card>
    )
}
