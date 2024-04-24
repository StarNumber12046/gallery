import { getImages } from "~/server/query";
import { Img } from "./_components/Image";

export const dynamic = "force-dynamic";


export default async function HomePage() {
  const images = await getImages() ?? [];
  console.log(images)
  if (images.length === 0) return (
    <main className="mt-4">
      <div className="flex flex-wrap justify-center gap-4 items-center">
        <h1 className="text-3xl">Wow it{"'"}s empty here! Upload some pictures with the button above</h1>
      </div>
    </main>
  )
  return (
    <main className="mt-4">
      <div className="flex h-[100px] flex-wrap justify-center gap-4">
        {images.map((image) => (
          <Img key={image.id} image={image}/>
        ))}
      </div>
    </main>
  );
}

  