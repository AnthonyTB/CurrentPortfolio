import React from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import "./App.css";
import { Home, DetailedProject, Boundary } from "./Routes/";
import Footer from "./Components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <>
        <Switch>
          <Route
            path="/"
            exact
            render={(routeProps: RouteComponentProps) => (
              <Home {...routeProps} />
            )}
          />
          <Route
            path="/project/:name"
            render={(routeProps: RouteComponentProps) => (
              <DetailedProject {...routeProps} />
            )}
          />
          <Boundary />
        </Switch>
        <Footer />
      </>
    </div>
  );
};

export default App;
