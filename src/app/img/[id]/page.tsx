import { FullPageImageView } from "../../_components/ImageView";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex fixed w-full h-[calc(100vh-64px)]">
      <FullPageImageView photoId={photoId} />
    </div>
  );
}