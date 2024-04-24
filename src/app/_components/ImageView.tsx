import Image from "next/image";
import { getImage } from "~/server/query";

export async function FullPageImageView(props: { photoId: string }) {
  const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber) ?? null;

  if (!image) {
    return (
      <div className="flex h-full w-full min-w-0 items-center justify-center text-white outline-none">
        <div className="text-4xl">404</div>
      </div>
    );
  }

  return (
    <div style={{ backdropFilter: "blur(10px)" }} className="border border-neutral-700 backdrop-blur absolute flex h-full w-full overflow-y-hidden min-w-0 items-center outline-none rounded-lg justify-center text-white left-0 right-0">
        <Image src={image.url} className="object-contain h-[90%]" alt={image.name} style={{ objectFit: "contain" }} objectFit="contain" layout="fill" />
      </div>
  );
}