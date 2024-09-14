"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <section className="max-w-4xl">
      <h1 className="text-wrap text-center text-5xl font-black tracking-tight text-white lg:text-7xl">
        Refresh?
      </h1>
    </section>
  );
}
