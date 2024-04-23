"use client";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";


export function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex w-screen justify-between border-b border-b-neutral-600 bg-black p-4 font-semibold text-white">
      <div>Gallery</div>
      <div className="inline-flex">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint="imageUploader" onClientUploadComplete={() => router.refresh()} />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
