import "server-only"
import { db } from "./db"
import { auth } from "@clerk/nextjs/server"

export async function getImages() {
    
    return await db.image.findMany({where: {userId: auth().userId ?? ""}})
}