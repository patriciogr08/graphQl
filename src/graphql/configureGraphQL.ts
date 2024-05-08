import fs from 'fs';
import path from 'path';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { resolvers } from './resolvers/resolver';

const schema = buildSchema(fs.readFileSync(path.join(__dirname, './schemas/ordenesTorres.graphql'), 'utf8'));

export function configureGraphQL(app: any) {
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: true,
    }));
}