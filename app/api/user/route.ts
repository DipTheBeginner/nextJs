import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function POST(req: NextRequest) {

    const body = await req.json();

    console.log("Body is ",body.data)
    await client.user.create({
        data: {
            username: body.data.username,
            password: body.data.password
        }
    })

    console.log(body)

    return Response.json({
        message: "You are loggin"
    })
}