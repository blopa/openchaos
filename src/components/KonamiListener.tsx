"use client";

import Konami from "konami-code-js";
import { useEffect } from "react";

export function KonamiListener() {
  useEffect(() => {
    const konami = new Konami(() => {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    });

    return () => {
      konami.disconnect();
    };
  }, []);

  return null;
}