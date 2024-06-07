import createAuth0Client from '@auth0/auth0-spa-js';

const Auth0Config = async () => {
  return await createAuth0Client({
    client_id: '617CCZ9ZFiNYIw9KLRy6qbkh1HK3KgOJ',
    domain: 'dev-obk84v4k.auth0.com',
    redirect_uri: 'https://crema-react.firebaseapp.com/dashboards/crm',
    audience: 'https://dev-obk84v4k.auth0.com/userinfo',
  });
};

export default Auth0Config;
