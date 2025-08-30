import { isRouteErrorResponse, useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  let title = 'Something went wrong'
  let message = 'An unexpected error occurred.'

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`
    message = (error.data as any)?.message || 'Page not found or route error.'
  }

  return (
    <div className="h-[70vh] grid place-items-center text-center">
      <div>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-slate-300 mb-6">{message}</p>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-sm"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  )
}

