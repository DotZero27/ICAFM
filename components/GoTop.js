"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

export default function GoTop() {
  const [visible, setVisible] = React.useState(false);

  React.useLayoutEffect(() => {
    if (window.scrollY > 100) {
      setVisible(true);
    }

    window.onscroll = () => {
      if (!visible) {
        var currentScrollPos = window.scrollY;

        if (currentScrollPos > 100) {
          //show
          setVisible(true);
        } else {
          //hide
          setVisible(false);
        }
      }
    };
  }, []);

  if (visible) {
    return (
      <div className="fixed bottom-0 right-0 p-4">
        <button
          onClick={(e) =>
            window.scrollTo({
              top: 1,
              behavior: "smooth",
            })
          }
        >
          <ArrowUp className="w-12 h-12 bg-primary text-white rounded-full p-2 border-2 border-white shadow-md" />
        </button>
      </div>
    );
  }
}
