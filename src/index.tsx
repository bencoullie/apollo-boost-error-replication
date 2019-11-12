import React from 'react';
import { render } from 'react-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Generating client via boost imports (using boost types)
const client = new ApolloClient({
	uri: 'https://nx9zvp49q7.lp.gql.zone/graphql',
	cache: new InMemoryCache({
		freezeResults: true,
	}),
	assumeImmutableResults: true,
});

const ExampleApp = (
	<ApolloProvider client={client}>
		<h1>Example Content</h1>
	</ApolloProvider>
)

render(ExampleApp, document.getElementById('root'));
