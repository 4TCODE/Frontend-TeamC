import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home/Home"
import { SearchTermProvider } from "../Context/SearchTerm"


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
      <SearchTermProvider>
        <RouterProvider router={router}></RouterProvider>
      </SearchTermProvider>
    </>
  )
}