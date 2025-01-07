"use client";
import { BadgeCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VerifiedPage() {
  const router = useRouter();
  return (
    <>
      <div className="h-screen w-full  flex flex-col items-center justify-center space-y-3 gap-2">
        <p className="text-zinc-700 text-xl dark:text-zinc-400">
          <BadgeCheck className="text-green-500 h-14 w-14" />
        </p>
        <h1 className="text-zinc-700 dark:text-zinc-400 text-3xl">
          Your Account Verified
        </h1>
        <button
          className="text-md  py-2 px-4 bg-violet-500 text-white"
          onClick={() => router.replace("/user")}
        >
          Go To Login
        </button>
      </div>
    </>
  );
}
