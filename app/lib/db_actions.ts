"use server";

import mongo_connection from "./mongodb";
import { Todo, TodoGroup, User } from "./collections";

export async function getUserList() {
    try {
        const db = await mongo_connection();
        if (!db) throw new Error("Database connection is undefined.");

        const user_col = db.collection("user");
        const users = user_col.find().toArray();

        return users;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getTodoList() {
    try {
        const db = await mongo_connection();
        if (!db) throw new Error("Database connection is undefined.");

        const todo_collection = db.collection("todo");
        const todos = todo_collection.find().toArray();

        return todos;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function createTodo({ todo, user_id }: { todo: string; user_id: string }) {
    try {
        const db = await mongo_connection();
        if (!db) throw new Error("Database connection is undefined.");

        const todo_collection = db.collection("todo");
        todo_collection.insertOne({ text: todo, user_id: user_id, status: false, order: 1 });
    } catch (error) {
        console.error("Error:", error);
    }
}
