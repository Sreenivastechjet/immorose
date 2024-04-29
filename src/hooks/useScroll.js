import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function useScroll(initialDirection = "down") {
  const isBrowser = typeof document !== "undefined";
  const pathname = usePathname(); // Get current pathname from Next.js navigation

  // storing this to get the scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // the offset of the document.body
  const [bodyOffset, setBodyOffset] = useState(
    isBrowser ? document.body.getBoundingClientRect() : { top: 0, left: 0 }
  );
  // the vertical direction
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  // the horizontal direction
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  // scroll direction would be either up or down
  const [scrollDirection, setScrollDirection] = useState(initialDirection);

  const listener = (e) => {
    if (isBrowser) {
      setBodyOffset(document.body.getBoundingClientRect());
      setScrollY(-bodyOffset.top);
      setScrollX(bodyOffset.left);
      setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
      setLastScrollTop(-bodyOffset.top);
    }
  };

  useEffect(() => {
    if (isBrowser) {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }
  });

  useEffect(() => {
    // Reset scroll direction when pathname changes
    setScrollDirection(initialDirection);
    setBodyOffset({ top: 0, left: 0 })
  }, [pathname,initialDirection]);

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
}
