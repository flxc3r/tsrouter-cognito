import { useLocation } from '@tanstack/react-router'
import { LoginButton } from './LoginButton'
import type { AuthContextProps } from 'react-oidc-context'

function NotAuthenticated({
  auth,
  className,
}: {
  auth: AuthContextProps
  className?: string
}) {
  const location = useLocation()

  return (
    <div className={`text-center space-y-6 ${className}`}>
      <p>Trying to access: {location.pathname}</p>

      {!auth.isAuthenticated && (
        <div className="space-y-2">
          <p className="text-orange-600">You are not authenticated</p>
          <LoginButton auth={auth} className="min-w-24" />
        </div>
      )}

      {auth.error && (
        <div className="text-red-500">
          Encountering error...
          <br />
          {auth.error.message}
        </div>
      )}
    </div>
  )
}

export { NotAuthenticated }
