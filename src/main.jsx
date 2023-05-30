import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import {
    QueryClient,
    QueryClientProvider
} from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                    <div className='max-w-screen-xl mx-auto'>
                        <RouterProvider router={router}></RouterProvider>
                    </div>
                </QueryClientProvider>
                <Toaster></Toaster>
            </HelmetProvider>
        </AuthProvider>
    </React.StrictMode>,
)