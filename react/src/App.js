import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
// import { css } from "styled-components/macro"; //eslint-disable-line

import BlogIndex from "pages/BlogIndex";
// import Blog from "Blog.js";
import useFetch from './useFetch';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const {loading,error,data} = useFetch('http://54.198.63.65:1337/api/blogs?populate=*');
  if(loading) return <p>Loading...</p>
  if(error) return console.log(error)
 console.log(data)

  return (
    <Router>
      <Switch>
        <Route path="/">
          <BlogIndex posts={data}  />
        </Route>
      </Switch>
    </Router>
  );
}
