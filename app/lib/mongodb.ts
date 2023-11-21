import { MongoClient } from "mongodb";

const url:any = process.env.MONGODB_URL;
const client = new MongoClient(url);

export default async function mongo_connection() {
    try{
        await client.connect();
        console.log('Connected to mongodb success...');
        const db = client.db('todo');
        return db;
    } catch(err){
        console.log("MongoDB connect error:",err)
    }

}