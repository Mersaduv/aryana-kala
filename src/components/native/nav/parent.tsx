"use client";

import { Button } from "@/components/ui/button";
import { LogInIcon, MoonIcon, ShoppingBasketIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ModeToggle } from "@/components/native/mode-toggle";
import config from "@/config/site";
import { Signup } from "@/components/native/user";

export default function Header() {
  return (
    <header className="bg-white px-4 lg:shadow xl:fixed xl:inset-x-0 xl:top-0 xl:z-20">
      <div className="container max-w-[1700px] lg:flex lg:py-2">
        <MainNav />
        <div className="flex items-center space-x-2">
          <Signup />
          <CartNav />
          <ModeToggle />
          {/* <LoginDialog /> */}
        </div>
      </div>
    </header>
  );
}
export function MainNav() {
  return (
    <div className="hidden md:flex gap-4">
      <Link href="/" className="flex items-center">
        <span className="hidden font-medium sm:inline-block">
          {config.name}
        </span>
      </Link>
    </div>
  );
}
export function CartNav() {
  return (
    <Link href="/cart">
      <Button size="icon" variant="outline" className="h-9">
        <ShoppingBasketIcon className="h-4" />
      </Button>
    </Link>
  );
}

function LoginDialog() {
  return (
    <Link href="/login">
      <Button className="font-medium flex gap-2">
        <LogInIcon className="h-4" />
        <p>Login</p>
      </Button>
    </Link>
  );
}
