import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import Homepage from './components/Pages/Homepage.jsx'
import About from './components/Pages/About.jsx'
import Blog from './components/Pages/Blog.jsx'
import FAQ from './components/Pages/FAQ.jsx'
import BookDetails from './components/Pages/BookDetails.jsx'
import ErrorPage from './components/Pages/ErrorPage.jsx'



const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
          {
              path: '/',
              element: <Homepage />,
          },
          {
              path: '/about',
              element: <About />,
          },
          {
              path: '/blog',
              element: <Blog/>,
          },
          ,
          {
              path: '/faq',
              element: <FAQ/>,
          },
          {
            path: '/bookdetails/:bookId',
            element: <BookDetails/>,
        },
          {
            path:  '/*',
            element: <ErrorPage/>,
        },

      ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
      <App />
  </RouterProvider>
)