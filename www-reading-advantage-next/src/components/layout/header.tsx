'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { navigationLinks, productLinks, NavigationLink, ProductLink } from '@/config/navigation';
import Image from 'next/image';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const pathname = usePathname();

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
                {navigationLinks.map((link: NavigationLink) => {
                  if (link.href === '/products') {
                    return (
                      <div key={link.href}>
                        <div className={`text-lg px-3 py-2 rounded-lg ${pathname.startsWith('/products') ? 'bg-sky-600' : ''}`}>
                          {link.label}
                        </div>
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {productLinks.map((product: ProductLink) => (
                            <Link
                              key={product.href}
                              href={product.href}
                              className={`text-base px-3 py-2 rounded-lg hover:bg-sky-600 transition-colors ${
                                pathname === product.href ? 'bg-sky-600' : ''
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {product.label}
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
                      {link.label}
                    </Link>
                  );
                })}
                <div className="border-t border-sky-400 pt-4 mt-4">
                  <Link
                    href="/login"
                    className="block px-3 py-2 rounded-lg hover:bg-sky-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block px-3 py-2 mt-2 bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>

          {/* Main Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationLinks.map((link: NavigationLink) => {
              if (link.href === '/products') {
                return (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setShowProductMenu(true)}
                    onMouseLeave={() => setShowProductMenu(false)}
                  >
                    <button
                      className={`text-sky-50 hover:text-white transition-colors relative py-2 flex items-center gap-1 ${
                        pathname.startsWith('/products') ? 'font-medium' : ''
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {showProductMenu && (
                      <div className="absolute top-full left-0 w-64 bg-sky-500 rounded-lg shadow-lg py-2 mt-1">
                        {productLinks.map((product: ProductLink) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            className={`block px-4 py-2 hover:bg-sky-600 transition-colors ${
                              pathname === product.href ? 'bg-sky-600' : ''
                            }`}
                          >
                            {product.label}
                          </Link>
                        ))}
                      </div>
                    )}
                    {pathname.startsWith('/products') && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                        layoutId="underline"
                      />
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
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                      layoutId="underline"
                    />
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
            <div className="hidden lg:flex items-center space-x-4">
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
          </div>
        </div>
      </div>
    </header>
  );
}
