"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Patrons",
    href: "/committee/patrons",
  },
  {
    title: "Organising Committee",
    href: "/committee/organising_committee",
  },
  {
    title: "International Advisory Committee",
    href: "/committee/international_advisory",
  },
  {
    title: "National Advisory Committee",
    href: "/committee/national_advisory",
  },
  {
    title: "Local Organising Committee",
    href: "/committee/local",
  }
];

export function NavMenu() {
  return (
    <NavigationMenu className="hidden lg:flex h-full">
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-2 md:w-[350px]">
              <ListItem href="/about-us#ssn" title="About SSN" />
              <ListItem
                href="/about-us#department"
                title="About the department"
              />
              <ListItem
                href="/about-us#conference"
                title="About the conference"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Organisers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-2 md:w-[350px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/topics" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
              Topics
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/publications_and_awards" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
              Publications and Awards
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/registration" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
              Registration
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/payment" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
              Payment
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/faq" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
              Faq
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-white focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p> */}
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
