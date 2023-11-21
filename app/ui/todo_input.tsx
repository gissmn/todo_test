"use client";
import { createTodo } from "../lib/db_actions";

export default function Todo_input() {
    let text: string = "";
    function handleChange(e: string) {
        text = e;
    }
    function handleClick() {
        createTodo({ user_id: "1231", todo: text });
    }
    return (
        <div>
            create new todo
            <input className="border-2 rounded-xl border-black px-4" onChange={(e) => handleChange(e.target.value)} />
            <button onClick={handleClick}>Create</button>
        </div>
    );
}
