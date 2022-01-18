import type { RequestHandler } from "@sveltejs/kit";

//TODO: Sauvegarder dans une base de données
let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}

export const post: RequestHandler<{}, FormData> = (request) => {
    todos.push({
        create_at: new Date(),
        text: request.body.get("text"),
        done: false
    });
    
    return {
        status: 303,
        headers: {
            location: "/"
        },
    }
}