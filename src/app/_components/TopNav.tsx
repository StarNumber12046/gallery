"use client";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/app/_components/UploadButton";


export function TopNav() {
  return (
    <nav className="flex w-screen justify-between border-b border-b-neutral-600 bg-black p-4 font-semibold relative text-white">
      <div>Gallery</div>
      <div className="gap-4 flex">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
