import type { AuthProviderProps } from 'react-oidc-context'

export const cognitoAuthConfig: AuthProviderProps = {
  authority: import.meta.env.VITE_COGNITO_AUTHORITY,
  client_id: import.meta.env.VITE_COGNITO_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_COGNITO_REDIRECT_LOGIN_URI,
  response_type: 'code',
  scope: 'email openid phone',
}
