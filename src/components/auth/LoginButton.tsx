import { IconLoader } from '@tabler/icons-react'
import { useLocation } from '@tanstack/react-router'
import { Button } from '../ui/button'
import type { AuthContextProps } from 'react-oidc-context'
import type { AuthState } from '@/auth/auth.types'

function LoginButton({
  auth,
  className,
}: {
  auth: AuthContextProps
  className?: string
}) {
  const location = useLocation()
  const authState: AuthState = {
    redirectTo: location.pathname,
  }

  return (
    <Button
      onClick={() => auth.signinRedirect({ state: authState })}
      disabled={auth.isLoading}
      className={`cursor-pointer ${className}`}
    >
      {auth.isLoading && <IconLoader className="animate-spin" />}
      Login
    </Button>
  )
}

export { LoginButton }
