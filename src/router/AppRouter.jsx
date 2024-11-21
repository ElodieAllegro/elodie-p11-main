import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Location from "../pages/Location/Location";
import Error404 from "../pages/404/404.jsx";
import Layout from "../components/Layout/Layout";

import { RouterProvider, 
createBrowserRouter,
createRoutesFromElements, 
Route } from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        element={<Layout />}
      >
        <Route path="" element={<Home />} />
        <Route 
          path="locations/:id"
          element={<Location />} 
          errorElement={<Error404 />}
          loader={({ params }) => {
            return fetch('/data.json')
              .then(res => res.json())
              .then(data => {
  
                const l = data.find(d => d.id === params.id)              
                if(!l){
                  throw new Response("Not Found", { status: 404 });
                }
                return l
  
            })
          }}
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    )
  )

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
