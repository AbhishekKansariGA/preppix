
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ClipboardList, Menu, LayoutDashboard, Trophy, User, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { useAuth } from '@/context/auth-context';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export function Header() {
  const pathname = usePathname();
  const { isAuthenticated, isProfileComplete } = useAuth();
  
  if (pathname === '/login' || pathname === '/otp-verify') {
    return null;
  }

  const navLinks = [
    { href: '/', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
    { href: '/account', label: 'Account', icon: User },
    { href: `/tests/cgl`, label: 'SSC CGL', icon: FileText },
    { href: `/tests/chsl`, label: 'SSC CHSL', icon: FileText },
    { href: `/tests/mts`, label: 'SSC MTS', icon: FileText },
  ];
  
  const showRedDot = isAuthenticated && !isProfileComplete;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden mr-2 relative">
              {showRedDot && <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />}
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
             <SheetHeader className='p-4'>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-2 p-4 pt-0">
              <Link href="/" className="mb-4 flex items-center space-x-2">
                <ClipboardList className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">Preppix</span>
              </Link>
              {navLinks.map(link => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'relative flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary p-2 rounded-md',
                      pathname === link.href
                        ? 'text-primary bg-secondary'
                        : 'text-foreground/80'
                    )}
                  >
                    <link.icon className="h-5 w-5" />
                    <span>{link.label}</span>
                     {link.href === '/account' && showRedDot && <span className="absolute right-4 h-2 w-2 rounded-full bg-red-500" />}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ClipboardList className="h-6 w-6 text-primary" />
          <span className="font-bold hidden sm:inline-block">Preppix</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium whitespace-nowrap overflow-x-auto hide-scrollbar">
          {navLinks.map(link => (
             <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative flex items-center gap-2 transition-colors hover:text-foreground/80',
                pathname === link.href
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
              {link.href === '/account' && showRedDot && <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />}
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
