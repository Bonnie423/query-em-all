import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { routes } from './routes.tsx'

const router = createBrowserRouter(routes)

const root = createRoot(document.getElementById('app') as HTMLElement)
// creating a new QueryClient instance
const queryClient = new QueryClient()

root.render(
<QueryClientProvider client={queryClient} >
<RouterProvider router={router} />
<ReactQueryDevtools />
</QueryClientProvider>
 )
// ...

