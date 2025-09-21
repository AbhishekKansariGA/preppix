
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ClipboardList, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { useAuth } from '@/context/auth-context';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export function Header() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();
  
  if (pathname === '/login' || pathname.startsWith('/tests/')) {
    return null;
  }

  const navLinks = [
    { href: '/', label: 'Dashboard' },
    { href: '/leaderboard', label: 'Leaderboard' },
    { href: '/account', label: 'Account' },
    { href: `/tests/cgl`, label: 'SSC CGL' },
    { href: `/tests/chsl`, label: 'SSC CHSL' },
    { href: `/tests/mts`, label: 'SSC MTS' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden mr-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
             <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 p-4">
              <Link href="/" className="mb-4 flex items-center space-x-2">
                <ClipboardList className="h-6 w-6 text-primary" />
              </Link>
              {navLinks.map(link => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-primary',
                      pathname === link.href
                        ? 'text-primary'
                        : 'text-foreground/80'
                    )}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ClipboardList className="h-6 w-6 text-primary" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium whitespace-nowrap overflow-x-auto hide-scrollbar">
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
          {!isAuthenticated && (
             <Button asChild>
                <Link href="/login">Login</Link>
             </Button>
          )}
        </div>
      </div>
    </header>
  );
}
