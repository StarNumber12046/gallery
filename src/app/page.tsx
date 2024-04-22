import { db } from "~/server/db";

export default async function HomePage() {
  return (
    <main className="mt-4">
      <div className="flex flex-wrap gap-4 h-[100px]">
        {(await db.image.findMany({})).map((image) => (
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
