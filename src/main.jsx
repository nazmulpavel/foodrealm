import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import About from './components/About.jsx'
import Blog from './components/Blog.jsx'
import FAQ from './FAQ.jsx'
import BookDetails from './components/BookDetails.jsx'



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

      ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
      <App />
  </RouterProvider>
)