import type { Request } from "@sveltejs/kit"
import PrismaClient from "$lib/prisma"

const prisma = new PrismaClient();

export const api = async (request: Request, data?: Record<string, unknown>) => {
    let body = {},
        status = 500;

    switch (request.method.toLocaleUpperCase()) {
        case "GET":
            body = await prisma.todo.findMany({
                orderBy: {
                  done: 'asc'
                }
              });
            status = 200;
            break;
        case "POST":
            body = await prisma.todo.create({
                data: {
                    create_at: data.create_at as Date,
                    done: data.done as boolean,
                    text: data.text as string
                }
            })
            status = 201;
            break;
        case "DELETE":
            body = await prisma.todo.delete({
                where: {
                    uid: request.params.uid
                }
            })
            status = 200;
            break;
        case "PATCH":
            body = await prisma.todo.update({
                where: {
                    uid: request.params.uid
                },
                data: {
                    done: data.done,
                    text: data.text || undefined
                }
            })
            status = 200;
            break;
        default:
            break;
    }

    if (request.method.toUpperCase() !== "GET" && request.headers.accept !== "application/json") {
        return {
            status: 303,
            headers: {
                location: "/"
            }
        }
    }
    return {
        status,
        body
    }
}