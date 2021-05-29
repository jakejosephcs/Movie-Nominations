import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';
import Nominations from './pages/Nominations';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/nominations'>
          <Nominations />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
