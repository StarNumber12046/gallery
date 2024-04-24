import { deleteImage } from "~/server/query";
import { type NextRequest } from 'next/server'

export async function DELETE(req: NextRequest) {
    console.log(req)
    const imageId  = req.nextUrl.searchParams.get("imageId")
    if (!imageId) return
    console.log("imageId", imageId)
    await deleteImage(Number(imageId))
    return new Response(null, { status: 200 })
}