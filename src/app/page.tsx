import { getImages } from "~/server/query";


export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images  = await getImages();
  return (
    <main className="mt-4">
      <div className="flex flex-wrap gap-4 h-[100px]">
        
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt="Image"
            height={100}
            className="object-cover h-[100px] w-auto"
          />
        ))}
      </div>
    </main>
  );
}
