import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'

function LoadingPlaceholder() {
  return <section style={{ backgroundColor: '#231F20', height: '100vh', width: '100vw' }} />
}

const HomeLoadableComponent = Loadable({
  loader: () => import('./components/Landing/landing'),
  loading: LoadingPlaceholder,
})

const NotFoundLoadableComponent = Loadable({
  loader: () => import('./components/PageNotFound/pageNotFound'),
  loading: LoadingPlaceholder,
})

function App() {
  return (
    <Switch>
    {/* Normal routes */}
    <Route exact path="/" component={HomeLoadableComponent} />
    {/* Private routes */}
    {/* <PrivateRoute exact path="/personal-info" component={PersonalInfoLoadableComponent} /> */}
     {/* Not found */}
     <Route component={NotFoundLoadableComponent} />
    </Switch>
  );
}

export default App;
