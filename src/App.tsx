import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Home, Project } from './Routes/';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Switch>
        <Route
          path='/'
          exact
          render={(routeProps) => <Home {...routeProps} />}
        />
        <Route
          path='/project/:name'
          render={(routeProps) => <Project {...routeProps} />}
        />
      </Switch>
    </div>
  );
};

export default App;
