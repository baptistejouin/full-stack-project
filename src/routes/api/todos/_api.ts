import type { Request } from "@sveltejs/kit"

//TODO: Sauvegarder dans une base de données
let todos: Todo[] = [];


export const api = (request: Request, todo?: Todo) => {
    let body = {},
        status = 500;



    switch (request.method.toLocaleUpperCase()) {
        case "GET":
            body = todos,
                status = 200
            break;
        case "POST":
            todos.push(todo);
            body = todo;
            status = 201;
            break;
        case "DELETE":
            status = 200;
            todos = todos.filter(todo => todo.uid !== request.params.uid);
            break;
        default:
            break;
    }

    if (request.method.toUpperCase() !== "GET") {
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