import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useAuth } from 'react-oidc-context'
import type { AuthState } from '@/auth/auth.types'

export const Route = createFileRoute('/logged-in')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const auth = useAuth()

  useEffect(() => {
    if (!auth.user) return
    const userState = auth.user.state as AuthState | undefined
    const redirectTo = userState?.redirectTo || '/'
    console.log('Logged in. Redirectin to: ', redirectTo)
    navigate({ to: redirectTo })
  }, [auth.user])

  return (
    <div className="container mx-auto max-w-4xl px-4 py-2">
      <div className="grid gap-6 mt-6">
        <section className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">You have logged in ✅</h2>
        </section>
      </div>
    </div>
  )
}
