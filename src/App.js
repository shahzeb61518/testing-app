import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Body from './components/pages/Body'
import Header from './components/pages/common/Header'
import Footer from './components/pages/common/Footer'

import routes from './components/helper/Routes';


function App() {
  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  return (
    <div className="App">
      <Router basename="/" >
        <React.Suspense fallback={loading()}>
          <Header />
          <Switch>
            {
              routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <route.component {...props} />
                    )} />
                ) : (null);
              })
            }
            <Redirect to='/home' />
          </Switch>
          <Footer />
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
