import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'
import { HomePage, 
         ArticlesList, 
         ArticlePage, 
         PrivacyPolicy, 
         SiteMap, 
         CodeByWilliam 
        } from './pages'



export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Route path="/" component={HomePage} exact />
      <Route path="/articles-list" component={ArticlesList} />
      <Route path="/article" component={ArticlePage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/site-map" component={SiteMap} />
      <Route path="/code-by-william" component={CodeByWilliam} />
    </BrowserRouter>
  )
}