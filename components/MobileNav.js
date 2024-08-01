"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import Logo from "@/assets/logoWhite.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu } from "lucide-react";
import Image from "next/image";

const otherNav = [
  { title: "Publication and Awards", href: "/publications_and_awards" },
  { title: "Topics", href: "/topics" },
  { title: "Registration", href: "/registration" },
  { title: "Contact", href: "/contact-us" },
  { title: "Payment", href: "/payment" },
];
const sidebarNav = [
  {
    title: "About",
    items: [
      {
        title: "SSN",
        href: "/about-us#ssn",
        items: [],
      },
      {
        title: "Department",
        href: "/about-us#department",
        items: [],
      },
      {
        title: "Conference",
        href: "/about-us#conference",
        items: [],
      },
      
    ],
  },
  {
    title: "Organisers",
    items: [
      {
        title: "Patrons",
        href: "/committee/patrons",
        items: [],
      },
      {
        title: "Organising Committee",
        href: "/committee/organising_committee",
        items: [],

      },
      {
        title: "International Advisory Committee",
        href: "/committee/international_advisory",
        items: [],
      },
      {
        title: "National Advisory Committee",
        href: "/committee/national_advisory",
        items: [],
      },
      {
        title: "Local Organising Committee",
        href: "/committee/local",
        items: [],
      },
    ],
  },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className=" mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu className="text-white" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pt-4 px-10">
        <MobileLink
          href="/"
          className="flex items-center gap-2 py-5 px-8 bg-primary"
          onOpenChange={setOpen}
        >
          <Image src={Logo} className="w-16 antialiased " alt="logo" />
          <div className="font-barlow border-l border-white px-2 text-3xl text-white">
            ICAFM-2024
          </div>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col justify-between space-y-2">
            {sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <React.Fragment key={item.href}>
                      {!item.disabled &&
                        (item.href ? (
                          <MobileLink
                            href={item.href}
                            onOpenChange={setOpen}
                            className="text-muted-foreground"
                          >
                            {item.title}
                            {item.label && (
                              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                              </span>
                            )}
                          </MobileLink>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-4 mt-8">
            {otherNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                    className="text-[#000000]"
                  >
                    {item.title}
                  </MobileLink>
                )
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

function MobileLink({ href, onOpenChange, className, children, ...props }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
