import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout/mainLayout";
import Home from './pages/home/home.js';
import Blog from './pages/blog/blog.js';
import BlogDetail from './pages/blog/blogDetail.js';
import Portfolio from './pages/portfolio/portfolio.js';
import PortfolioDetail from './pages/portfolio/portfolioDetail.js';
import Contact from './pages/contact/contact.js';
import Deneme from './pages/_deneme/deneme.js';

function App() {
  return (
    <div className="main">
      <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>        
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/blogDetail">
          <BlogDetail />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/portfolioDetail">
          <PortfolioDetail />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/deneme">
          <Deneme />
        </Route>
      </Switch>
      </MainLayout>
    </div>
  );
}
export default App;