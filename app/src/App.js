import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout/mainLayout";
import Home from './pages/home/home.js';
import Blog from './pages/blog/blog.js';
import About from './pages/about/about.js';
import Contact from './pages/contact/contact.js';

function App() {
  return (
    <div className="main">
      <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      </MainLayout>
    </div>
  );
}
export default App;
