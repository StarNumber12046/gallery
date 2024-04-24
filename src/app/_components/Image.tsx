"use client";
import Image from "next/image";
import Link from "next/link";
import { DeleteButton } from "./Delete";
import type { Image as ImageType } from "@prisma/client";
import { useState } from "react";

export function Img({ image }: { image: ImageType }) {
    let deleteBtn;
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  if (isHovering) {
    deleteBtn = (
      <DeleteButton
        imageId={image.id}
      />
    );
  } else {
    deleteBtn = null;
  }

  return (
    <div key={image.id} className="flex flex-col" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Image
        src={image.url}
        alt="Image"
        style={{
          objectFit: "contain",
        }}
        width={480}
        height={100}
        className="h-[100px] w-auto object-cover"
      />
      
        {deleteBtn}
      <Link href={`/img/${image.id}`} passHref className="flex flex-col">
        <div>
          {image.name.substring(0, 20) == image.name
            ? image.name
            : `${image.name.substring(0, 20)}...`}{" "}
        </div>
      </Link>
    </div>
  );
}
