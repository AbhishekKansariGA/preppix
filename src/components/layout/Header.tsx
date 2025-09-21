
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ClipboardList, LogOut, ChevronDown, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { useAuth } from '@/context/auth-context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { exams } from '@/lib/data';


const navLinks = [
  { href: '/', label: 'Dashboard' },
  { href: '/account', label: 'Account' },
];

export function Header() {
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();
  
  if (pathname === '/login' || pathname.startsWith('/tests/')) {
    return null;
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ClipboardList className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            ExamPrep Ace
          </span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === '/'
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            Dashboard
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={cn(
                    'flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/80 focus-visible:ring-0 px-0',
                    pathname.startsWith('/tests') ? 'text-foreground' : 'text-foreground/60'
                )}>
                Tests <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 max-h-60 overflow-y-auto hide-scrollbar">
                <DropdownMenuLabel>Select Exam</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                {exams.map((exam) => (
                    <Link href={`/tests/${exam.id}`} key={exam.id}>
                        <DropdownMenuItem>
                            {exam.name}
                        </DropdownMenuItem>
                    </Link>
                ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/leaderboard"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === '/leaderboard'
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            Leaderboard
          </Link>

          <Link
            href="/account"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === '/account'
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            Account
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://api.dicebear.com/8.x/initials/svg?seed=${user.username}`} />
                        <AvatarFallback>{user.username?.[0]?.toUpperCase()}</AvatarFallback>
                    </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.username}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.mobile}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logout()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
             <Button asChild>
                <Link href="/login">Login</Link>
             </Button>
          )}
        </div>
      </div>
    </header>
  );
}
