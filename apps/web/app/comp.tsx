"use client";
import { Button } from "@repo/shared/src/instances/btn";
import { useSearchParams } from "next/navigation";

export default function Comp() {
  const searchParams = useSearchParams();
  console.log("🚀 ~ Home ~ searchParams:", searchParams.toString());
  return (
    <div>
      {JSON.stringify(searchParams.entries())}
      <Button>jhkj</Button>dfd6j
    </div>
  );
}
