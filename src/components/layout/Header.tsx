
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ClipboardList, Trophy, User, PenSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/auth-context';

const navLinks = [
  { href: '/', label: 'Mock Tests', icon: ClipboardList },
  { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { href: '/account', label: 'Account', icon: User },
];

export function Header() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  // Hide header on all test-related pages for a distraction-free experience
  if (!isAuthenticated || pathname.startsWith('/tests')) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <PenSquare className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block text-lg">ExamPrep Ace</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-2 text-sm font-medium overflow-x-auto hide-scrollbar">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-2 transition-colors hover:text-primary whitespace-nowrap px-4 py-2 rounded-md',
                pathname === link.href
                  ? 'bg-white text-black hover:text-black'
                  : 'text-muted-foreground'
              )}
            >
              <link.icon className="h-4 w-4" />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
