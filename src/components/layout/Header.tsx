'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ClipboardList, Trophy, User, PenSquare, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/auth-context';
import { Button } from '../ui/button';

const navLinks = [
  { href: '/', label: 'Mock Tests', icon: ClipboardList },
  { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { href: '/account', label: 'Account', icon: User },
];

export function Header() {
  const pathname = usePathname();
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <PenSquare className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block">ExamPrep Ace</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-2 transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <link.icon className="h-4 w-4" />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome, {user?.username}</span>
            <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
            </Button>
        </div>
      </div>
    </header>
  );
}
