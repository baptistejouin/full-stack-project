/// <reference types="@sveltejs/kit" />

type Todo = {
    create_at: Date;
    text: string;
    done: boolean;
}