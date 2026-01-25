import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/me')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='min-h-screen bg-[#282c34] text-white p-6'>Hello "/me"!</div>
}
