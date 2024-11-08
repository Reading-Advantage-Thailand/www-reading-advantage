'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { navigation, NavItem } from "@/config/navigation";
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/auth-context";
import Image from 'next/image';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const renderAuthButtons = (isMobile = false) => {
    if (user) {
      return (
        <>
          <div className={isMobile ? "border-t border-sky-400 pt-4 mt-4" : "hidden lg:flex items-center space-x-4"}>
            <span className="text-sky-50">
              {user.email}
            </span>
            <Button
              variant="ghost"
              onClick={handleSignOut}
              className="text-sky-50 hover:text-white hover:bg-sky-600 transition-colors"
            >
              Sign Out
            </Button>
          </div>
        </>
      );
    }

    return (
      <div className={isMobile ? "border-t border-sky-400 pt-4 mt-4" : "hidden lg:flex items-center space-x-4"}>
        <Link
          href="/login"
          className="text-sky-50 hover:text-white transition-colors"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-sky-800 text-sky-50 px-4 py-2 rounded-lg hover:bg-sky-900 transition-colors"
        >
          Sign Up
        </Link>
      </div>
    );
  };

  return (
    <header className="bg-sky-500 text-sky-50 header-shadow fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-sky-50 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-sky-500 text-sky-50 border-sky-400">
              <SheetHeader>
                <SheetTitle className="text-sky-50">Navigation Menu</SheetTitle>
                <SheetDescription className="text-sky-200">
                  Access all pages and features of Reading Advantage Thailand
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((link) => {
                  if (link.href === '/products') {
                    return (
                      <div key={link.href}>
                        <Link
                          href={link.href}
                          className={`text-lg px-3 py-2 rounded-lg ${pathname.startsWith('/products') ? 'bg-sky-600' : ''}`}
                        >
                          {link.title}
                        </Link>
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {link.items?.map((product: NavItem) => (
                            <Link
                              key={product.href}
                              href={product.href}
                              className={`text-base px-3 py-2 rounded-lg hover:bg-sky-600 transition-colors ${
                                pathname === product.href ? 'bg-sky-600' : ''
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {product.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg px-3 py-2 rounded-lg hover:bg-sky-600 transition-colors ${
                        pathname === link.href ? 'bg-sky-600' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  );
                })}
                {renderAuthButtons(true)}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="Reading Advantage Thailand Logo"
                width={48}
                height={48}
                className="h-12 w-auto rounded-md"
                priority
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((link) => {
              if (link.href === '/products') {
                return (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setShowProductMenu(true)}
                    onMouseLeave={() => setShowProductMenu(false)}
                  >
                    <Link
                      href={link.href}
                      className={`text-sky-50 hover:text-white transition-colors relative py-2 flex items-center gap-1 ${
                        pathname.startsWith('/products') ? 'font-medium' : ''
                      }`}
                    >
                      {link.title}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    {showProductMenu && link.items && (
                      <div className="absolute top-full left-0 w-64 bg-sky-500 rounded-lg shadow-lg py-2 mt-1">
                        {link.items.map((product: NavItem) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            className={`block px-4 py-2 hover:bg-sky-600 transition-colors ${
                              pathname === product.href ? 'bg-sky-600' : ''
                            }`}
                          >
                            {product.title}
                          </Link>
                        ))}
                      </div>
                    )}
                    {pathname.startsWith('/products') && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full" />
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sky-50 hover:text-white transition-colors relative py-2 ${
                    pathname === link.href ? 'font-medium' : ''
                  }`}
                >
                  {link.title}
                  {pathname === link.href && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <Select defaultValue="en">
              <SelectTrigger className="w-[100px] bg-sky-600 border-sky-400 text-sky-50 focus:ring-sky-400 focus:ring-offset-sky-500">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="th">ภาษาไทย</SelectItem>
              </SelectContent>
            </Select>

            {/* Auth buttons */}
            {renderAuthButtons()}
          </div>
        </div>
      </div>
    </header>
  );
}
