import { getImage } from "~/server/query";
import { Modal } from "./modal";
import { FullPageImageView } from "~/app/_components/ImageView";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: unknown };
}) {
  const image = (await getImage(Number(photoId))) ?? null;
  if (!image) return <Modal>404</Modal>;
  return (
    <Modal>
      <FullPageImageView photoId={photoId as string} />
    </Modal>
  )
}
