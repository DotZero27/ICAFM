"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useToggleState from "@/hooks/useTogleState";
import { Button } from "./ui/button";

export default function Welcome() {
  const [isMounted, setIsMounted] = React.useState(false);
  const { state, close, toggle } = useToggleState();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  React.useEffect(() => {
    if (isMounted) {
      toggle();
    }
  }, [isMounted]);

  const onOpenChange = (value) => {
    if (value) {
      open();
    } else {
      close();
    }
  };

  return (
    <Dialog open={state} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl w-full">
        <DialogHeader>
          <DialogTitle>
            <div className="font-bold text-4xl mb-8">Welcome to ICAFM 2024</div>
          </DialogTitle>
          <DialogDescription className="space-y-2 text-base">
            <div>
              International conference on ‘Advanced Functional Materials’ is
              aimed at bringing together the scientists and experts to provide a
              common platform for sharing their scientific results, thoughts and
              ideas.
            </div>
            <div>
              The event would comprise of invited lectures, contributed oral and
              poster presentations covering the latest works of the Materials
              Science community from all over the world.
            </div>
            <div>
              The main projection of the conference is to provide a forum for
              the participants to explore the latest developments in the field
              of <strong>'advanced functional materials'</strong> and to evolve
              guidelines for their further research in India/Overseas.
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <Button className="w-full" onClick={close}>
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
