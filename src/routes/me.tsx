import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from 'react-oidc-context'
import { NotAuthenticated } from '@/components/auth/NotAuthenticated'
import { CopyableDisplay } from '@/components/ui/copyableDisplay'

export const Route = createFileRoute('/me')({
  component: RouteComponent,
})

function RouteComponent() {
  const auth = useAuth()

  if (!auth.isAuthenticated) {
    return <NotAuthenticated auth={auth} className="mt-4" />
  }

  return (
    <div className="px-3">
      <pre className="overflow-x-auto font-mono text-sm py-4">Hello /me</pre>
      <div className="grid gap-6">
        <section className="p-4">
          {auth.user && (
            <div className="space-y-6">
              <div>
                <span className="text-3xl">{auth.user.profile.email}</span>
                <br />
                <pre className="text-md">Sub: {auth.user.profile.sub}</pre>
              </div>

              <pre>
                Issused: {new Date(auth.user.profile.iat * 1000).toString()}
                <br />
                Expires: {new Date(auth.user.profile.exp * 1000).toString()}
              </pre>

              <div>
                <pre> ID Token </pre>
                <CopyableDisplay
                  toDisplay={auth.user.id_token || ''}
                  toCopy={auth.user.id_token || ''}
                />
              </div>

              <div>
                <pre> Access Token: </pre>
                <CopyableDisplay
                  toDisplay={auth.user.access_token || ''}
                  toCopy={auth.user.access_token || ''}
                />
              </div>

              <div>
                <pre> Refresh Token: </pre>
                <CopyableDisplay
                  toDisplay={auth.user.refresh_token || ''}
                  toCopy={auth.user.refresh_token || ''}
                />
              </div>

              <div>
                <pre>Profile</pre>
                <pre className="bg-teal-500 rounded-md p-1">
                  {JSON.stringify(auth.user.profile, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
