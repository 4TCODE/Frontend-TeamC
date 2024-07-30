import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home/Home"


export default function App() {

  let router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}