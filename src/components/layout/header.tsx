'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { use, useState } from "react";
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
import { useAuth } from "@/contexts/auth-context";
import Image from 'next/image';
import { LocaleSwitcher } from "@/switcher/locale-switcher";
import { useScopedI18n } from "@/locales/client";

export function Header() {
  const t = useScopedI18n("components.common.header");
  const n = useScopedI18n("components.common.navigation");
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

  const navigation = [
    {
      title: n("main.0.title"),
      href: "/products",
      items: [
        { title: n("products.0.title"), href: "/products/reading-advantage" },
        { title: n("products.1.title"), href: "/products/math-advantage" },
        { title: n("products.2.title"), href: "/products/science-advantage" },
        { title: n("products.3.title"), href: "/products/stem-advantage" },
        { title: n("products.4.title"), href: "/products/zhongwen-advantage" },
        { title: n("products.5.title"), href: "/products/storytime-advantage" },
        { title: n("products.6.title"), href: "/products/codecamp-advantage" },
        { title: n("products.7.title"), href: "/products/tutor-advantage" },
      ],
    },
    {
      title: n("main.1.title"),
      href: "/features",
    },
    {
      title: n("main.2.title"),
      href: "/pricing",
    },
    {
      title: n("main.3.title"),
      href: "/blog"
    },
    {
      title: n("main.4.title"),
      href: "/about",
    },
    {
      title: n("main.5.title"),
      href: "/contact",
    },
  ];

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
              {t("signOut")}
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
          {t("login")}
        </Link>
        <Link
          href="/signup"
          className="bg-sky-800 text-sky-50 px-4 py-2 rounded-lg hover:bg-sky-900 transition-colors"
        >
          {t("signUp")}
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
                <span className="sr-only">{t('openMenu')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-sky-500 text-sky-50 border-sky-400">
              <SheetHeader>
                <SheetTitle className="text-sky-50">{t('navigationMenu')}</SheetTitle>
                <SheetDescription className="text-sky-200">
                  {t('navigationDescription')}
                </SheetDescription>
              </SheetHeader>
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
                          className={`text-sky-50 hover:text-white transition-colors relative py-2 flex items-center gap-1 ${pathname.startsWith('/products') ? 'font-medium' : ''}`}
                        >
                          {link.title}
                          <ChevronDown className="h-4 w-4" />
                        </Link>

                        {showProductMenu && link.items && (
                          <div className="absolute top-full left-0 w-64 bg-sky-500 rounded-lg shadow-lg py-2 mt-1">
                            {link.items.map((product) => (
                              <Link
                                key={product.href}
                                href={product.href}
                                className={`block px-4 py-2 hover:bg-sky-600 transition-colors ${pathname === product.href ? 'bg-sky-600' : ''}`}
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
                      className={`text-sky-50 hover:text-white transition-colors relative py-2 ${pathname === link.href ? 'font-medium' : ''}`}
                    >
                      {link.title}
                      {pathname === link.href && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full" />
                      )}
                    </Link>
                  );
                })}
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
                      className={`text-sky-50 hover:text-white transition-colors relative py-2 flex items-center gap-1 ${pathname.startsWith('/products') ? 'font-medium' : ''
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
                            className={`block px-4 py-2 hover:bg-sky-600 transition-colors ${pathname === product.href ? 'bg-sky-600' : ''
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
                  className={`text-sky-50 hover:text-white transition-colors relative py-2 ${pathname === link.href ? 'font-medium' : ''
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
            <LocaleSwitcher />

            {/* Auth buttons */}
            {renderAuthButtons()}
          </div>
        </div>
      </div>
    </header>
  );
}
