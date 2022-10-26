import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Topics from "./components/Topics/Topics";
import Statistics from "./components/Statistics/Statistics";
import Blogs from "./components/Blogs/Blogs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Topics></Topics> },
        { path: "topics", element: <Topics></Topics> },
        { path: "statistics", element: <Statistics></Statistics> },
        { path: "blogs", element: <Blogs></Blogs> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
