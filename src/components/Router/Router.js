import React from "react";
import Home from "../Home";
import Main from "../Layout/Main";
import Reports from "../Layout/Reports";


import Test from "../Test";
import Tasttable from "../Texttable.js/Tasttable";
import Testtable2 from "../Texttable.js/Testtable2";
import Testtable3 from "../Texttable.js/Testtable3";


const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/test/:id",
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.id}`),
        element: <Test></Test>,
      },
    ],
  },

  {
    path: "/country",
    element: <Reports></Reports>,
   
  },
{
  path:'/testtable',
  element:<Tasttable></Tasttable>
},
{
  path:'/testtable2',
  element:<Testtable2></Testtable2>
},
{
  path:'/testtable3',
  element:<Testtable3></Testtable3>
}
 
]);
