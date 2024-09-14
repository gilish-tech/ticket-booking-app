import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Footer from './components/global/Footer.tsx'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient({defaultOptions:{queries:{staleTime:30 * 5 * 10000}}})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
          <div className="overflow-hidden min-h-screen">
                <App />
          </div>
          <Footer/>
      </QueryClientProvider>
  </StrictMode>,
)
