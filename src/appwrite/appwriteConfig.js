import { Client, Account, Databases } from "appwrite";

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("63bec2b73accef814b6b");


export const account = new Account(client)

export const databases = new Databases(client, "63bec313df38e0c50969")