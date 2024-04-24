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

export async function deleteImage(id: number) {
    if (!id) return
    if (!auth().userId) return
    const item = await db.image.findUnique({where: {id}})
    console.log("ITEM!")
    console.log(item);
    
    if (auth().userId !== item?.userId) return
    const stuff = await db.image.deleteMany({where: {id: id}})
    console.log("===============")
    console.log(stuff);
    return;
}
