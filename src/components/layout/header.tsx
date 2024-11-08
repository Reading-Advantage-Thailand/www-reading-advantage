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
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import Image from 'next/image';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const { user, signOut } = useAuth();
  const t = useTranslations('navigation');
  const p = useTranslations('products');

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push(`/${locale}`);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleLocaleChange = (newLocale: string) => {
    const pathWithoutLocale = pathname.split('/').slice(2).join('/');
    startTransition(() => {
      router.replace(`/${newLocale}/${pathWithoutLocale}`);
    });
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
              {t('signOut')}
            </Button>
          </div>
        </>
      );
    }

    return (
      <div className={isMobile ? "border-t border-sky-400 pt-4 mt-4" : "hidden lg:flex items-center space-x-4"}>
        <Link
          href={`/${locale}/login`}
          className="text-sky-50 hover:text-white transition-colors"
        >
          {t('login')}
        </Link>
        <Link
          href={`/${locale}/signup`}
          className="bg-sky-800 text-sky-50 px-4 py-2 rounded-lg hover:bg-sky-900 transition-colors"
        >
          {t('signUp')}
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
                <SheetTitle className="text-sky-50">{t('menuTitle')}</SheetTitle>
                <SheetDescription className="text-sky-200">
                  {t('menuDescription')}
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((link: NavItem) => {
                  if (link.href === '/products') {
                    return (
                      <div key={link.href}>
                        <Link
                          href={`/${locale}${link.href}`}
                          className={`text-lg px-3 py-2 rounded-lg ${pathname.startsWith('/products') ? 'bg-sky-600' : ''}`}
                        >
                          {t('products')}
                        </Link>
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {link.items?.map((product: NavItem) => {
                            const productKey = String(product.href.split('/').pop());
                            return (
                              <Link
                                key={product.href}
                                href={`/${locale}${product.href}`}
                                className={`text-base px-3 py-2 rounded-lg hover:bg-sky-600 transition-colors ${
                                  pathname === product.href ? 'bg-sky-600' : ''
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                {p(`${productKey}.title`)}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.href}
                      href={`/${locale}${link.href}`}
                      className={`text-lg px-3 py-2 rounded-lg hover:bg-sky-600 transition-colors ${
                        pathname === link.href ? 'bg-sky-600' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {t(link.href.substring(1) || 'home')}
                    </Link>
                  );
                })}
                {renderAuthButtons(true)}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt={t('logoAlt')}
                width={48}
                height={48}
                className="h-12 w-auto rounded-md"
                priority
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((link: NavItem) => {
              if (link.href === '/products') {
                return (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setShowProductMenu(true)}
                    onMouseLeave={() => setShowProductMenu(false)}
                  >
                    <Link
                      href={`/${locale}${link.href}`}
                      className={`text-sky-50 hover:text-white transition-colors relative py-2 flex items-center gap-1 ${
                        pathname.startsWith('/products') ? 'font-medium' : ''
                      }`}
                    >
                      {t('products')}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    {showProductMenu && link.items && (
                      <div className="absolute top-full left-0 w-64 bg-sky-500 rounded-lg shadow-lg py-2 mt-1">
                        {link.items.map((product: NavItem) => {
                          const productKey = String(product.href.split('/').pop());
                          return (
                            <Link
                              key={product.href}
                              href={`/${locale}${product.href}`}
                              className={`block px-4 py-2 hover:bg-sky-600 transition-colors ${
                                pathname === product.href ? 'bg-sky-600' : ''
                              }`}
                            >
                              {p(`${productKey}.title`)}
                            </Link>
                          );
                        })}
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
                  href={`/${locale}${link.href}`}
                  className={`text-sky-50 hover:text-white transition-colors relative py-2 ${
                    pathname === link.href ? 'font-medium' : ''
                  }`}
                >
                  {t(link.href.substring(1) || 'home')}
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
            <Select 
              defaultValue={locale} 
              onValueChange={handleLocaleChange}
              disabled={isPending}
            >
              <SelectTrigger className="w-[100px] bg-sky-600 border-sky-400 text-sky-50 focus:ring-sky-400 focus:ring-offset-sky-500">
                <SelectValue placeholder={t('language')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="th">ภาษาไทย</SelectItem>
                <SelectItem value="zh">中文</SelectItem>
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
