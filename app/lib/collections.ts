export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    gender: "male" | "female";
    birthdate: Date;
    password: string;
}

export interface Todo {
    id: string;
    text: string;
    user_id: string;
    update_date: Date;
    order: number;
    status: boolean;
    group_id: string;
}

export interface TodoGroup {
    id: string;
    title: string;
}
