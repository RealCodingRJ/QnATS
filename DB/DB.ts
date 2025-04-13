import {MongoClient} from "mongodb";

type URI = {
    URI: string,
    DATA: string,
}

export async function DB<URI>(uri: URI, data: URI)  {

    const client = new MongoClient(uri.toString());
    const db = client.db("app");
    const coll = db.collection("app");
    await coll.insertOne(data);


}