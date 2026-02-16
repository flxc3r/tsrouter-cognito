import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from 'react-oidc-context'
import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { DataTable } from '@/components/data-table'
import { SectionCards } from '@/components/section-cards'

import data from '@/app/dashboard/data.json'
import { NotAuthenticated } from '@/components/auth/NotAuthenticated'

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  const auth = useAuth()

  if (!auth.isAuthenticated) {
    return <NotAuthenticated auth={auth} className="mt-4" />
  }

  return (
    <div className="my-4 space-y-8">
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </div>
  )
}
