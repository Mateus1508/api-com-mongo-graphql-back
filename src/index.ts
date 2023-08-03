import 'reflect-metadata';
import { dbConnection } from "./database/db";
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import CourseResolver from './resolvers/CourseResolver';
import StudentResolver from './resolvers/StudentResolver';

dotenv.config();
const PORT = process.env.PORT!;
const PASSWORD = process.env.PASSWORD!;
dbConnection(PASSWORD);

const app = async () => {


     const schema = await buildSchema({
        resolvers: [CourseResolver, StudentResolver],
        validate: false,
    })

    const server = new ApolloServer({
        schema,
    });

    const { url } = await server.listen(PORT);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

app();
