"use client";
import Comp from "./comp";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loxading...</div>}>
        <Comp />
      </Suspense>
    </div>
  );
}
