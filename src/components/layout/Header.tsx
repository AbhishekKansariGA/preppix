
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ClipboardList, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { useAuth } from '@/context/auth-context';
import { exams } from '@/lib/data';


export function Header() {
  const pathname = usePathname();
  const { isAuthenticated, logout } = useAuth();
  
  if (pathname === '/login' || pathname.startsWith('/tests/')) {
    return null;
  }

  const navLinks = [
    { href: '/', label: 'Dashboard' },
    { href: '/leaderboard', label: 'Leaderboard' },
    { href: '/account', label: 'Account' },
    ...exams.map(exam => ({ href: `/tests/${exam.id}`, label: exam.name }))
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ClipboardList className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            ExamPrep Ace
          </span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium whitespace-nowrap overflow-x-auto hide-scrollbar">
          {navLinks.map(link => (
             <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === link.href
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {isAuthenticated ? (
             <Button variant="outline" size="sm" onClick={() => logout()}>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
            </Button>
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
