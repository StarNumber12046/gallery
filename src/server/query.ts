import "server-only"
import { db } from "./db"
import { auth } from "@clerk/nextjs/server"

export async function getImages() {
    if (!auth().userId) return
    return await db.image.findMany({where: {userId: auth().userId ?? ""}})
}

export async function getImage(id: number) {
    if (!id) return
    if (!auth().userId) return
    return await db.image.findUnique({where: {id}})
}