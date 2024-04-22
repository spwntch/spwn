'use client';
import {
  Button,
  DropdownMenuSeparator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/react-components';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '../brand/logo';
import { Tagline } from '../brand/tagline';
import { NavMenu } from '../nav/nav-menu';

interface IMobileNavDrawerProps {
  onLinkTo: (href: string) => void;
}

export const MobileNavDrawer = ({ onLinkTo }: IMobileNavDrawerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[260px]">
        <SheetHeader className="pt-2">
          <SheetTitle>
            <Logo width={180} className="mx-auto" />
          </SheetTitle>
          <SheetDescription className="text-center">
            <Tagline />
          </SheetDescription>
        </SheetHeader>
        <DropdownMenuSeparator className="mt-4" />
        {/* <NavMenu
          onLinkTo={(href) => {
            setOpen(false);
            onLinkTo(href);
          }}
        /> */}
      </SheetContent>
    </Sheet>
  );
};
