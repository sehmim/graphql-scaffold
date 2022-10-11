import { introspectionFromSchema } from "graphql"
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader"
import { loadSchema } from "@graphql-tools/load"

// it can be any source you want here
loadSchema("src/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
}).then(schema => {
    const introspection = introspectionFromSchema(schema)
    console.log('===>>>>', JSON.stringify(introspection));
});