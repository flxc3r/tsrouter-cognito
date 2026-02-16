import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/logged-out')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const [seconds, setSeconds] = useState(5)

  useEffect(() => {
    // If the countdown reaches 0, redirect to home
    if (seconds <= 0) {
      navigate({ to: '/' })
      return
    }

    // Set up the interval to decrement every second
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)

    // Clean up the interval on unmount
    return () => clearInterval(timer)
  }, [seconds, navigate])

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="grid gap-6 mt-6">
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-bold">You have logged out</h2>
          <p>See you later 👋</p>
          <p className="text-gray-500 text-sm italic">
            Redirecting to home in <strong>{seconds}</strong> seconds...
          </p>
        </section>
      </div>
    </div>
  )
}
