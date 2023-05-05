import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path="book-a-call"
        loader={() => {
          console.log("here");
          return redirect("https://calendly.com/victor-digitalmarketing/30min");
        }}
      />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
