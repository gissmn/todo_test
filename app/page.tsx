import Todo_input from "./ui/todo_input";
import Todo from "./ui/todo";
import { getUserList, getTodoList } from "./lib/db_actions";

export default async function Home() {
    const todos = await getTodoList();
    console.log(todos);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Main Page
            <Todo_input />
            {todos?.map((e) => {
                return <Todo todo={e.text} key={`todo_${e._id}`} />;
            })}
        </main>
    );
}
