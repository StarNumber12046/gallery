import { getImages } from "~/server/query";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await getImages();
  return (
    <main className="mt-4">
      <div className="flex h-[100px] flex-wrap gap-4 justify-center">
        {images.map((image) => (
          <div key={image.id} className="flex flex-col">
            <Image
              src={image.url}
              alt="Image"
              style={{ objectFit: "contain" }}
              width={480}
              height={100}
              className="h-[100px] w-auto object-cover"
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
