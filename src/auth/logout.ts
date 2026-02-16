import type { AuthContextProps } from 'react-oidc-context'

async function logout(auth: AuthContextProps) {
  await auth.removeUser()
  await auth.signoutRedirect({
    // The id_token_hint is recommended by the OIDC spec but not strictly required by Cognito
    id_token_hint: auth.user?.id_token,
    extraQueryParams: {
      // Required by Cognito's /logout endpoint
      client_id: import.meta.env.VITE_COGNITO_CLIENT_ID,
      // The URL in your React app where the user is redirected post-logout
      logout_uri: import.meta.env.VITE_COGNITO_REDIRECT_LOGOUT_URI,
    },
  })
}

export default logout
