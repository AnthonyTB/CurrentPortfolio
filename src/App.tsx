import React, { useContext } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import './App.css';
import { Home, DetailedProject } from './Routes/';
import { Context } from './Components/Context';
import Footer from './Components/Footer/Footer';
import { css } from '@emotion/core';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { Animated } from 'react-animated-css';

const App: React.FC = () => {
  const { mediumData } = useContext(Context);

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const renderLoader = () => {
    return (
      <Animated
        animationIn='fadeIn'
        animationOut='fadeOut'
        animationInDelay={0}
        animationOutDelay={800}
        isVisible={true}
      >
        <div className='Loader'>
          <ScaleLoader css={override} color={'#2e2e2e'} loading={true} />
        </div>
      </Animated>
    );
  };

  return (
    <div className='App'>
      {mediumData ? (
        <>
          <Switch>
            <Route
              path='/'
              exact
              render={(routeProps: RouteComponentProps) => (
                <Home {...routeProps} />
              )}
            />
            <Route
              path='/project/:name'
              render={(routeProps: RouteComponentProps) => (
                <DetailedProject {...routeProps} />
              )}
            />
          </Switch>
          <Footer />
        </>
      ) : (
        renderLoader()
      )}
    </div>
  );
};

export default App;
