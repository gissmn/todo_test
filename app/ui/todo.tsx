"use client";

import { Todo } from "../lib/collections";
export default function Todo({ todo }: { todo: string }) {
    return (
        <div className="flex gap-2 justify-between w-48 border border-2 border-blue-400 rounded-2xl py-2 px-4">
            <input
                type="checkbox"
                onChange={(e) => {
                    console.log(e.target.checked);
                }}
            />
            <p>{todo}</p>
            <div className="flex gap-1">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    );
}
