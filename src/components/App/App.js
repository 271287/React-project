import styles from './App.scss';
import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import Faq from '../Faq/Faq';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import { AnimatedSwitch } from '../../../node_modules/react-router-transition';
import List from '../List/ListContainer';

const App = () => (
  <div>
    <BrowserRouter>
      <MainLayout>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className={styles.switchWrapper}
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/list/:id" component={List} />
        </AnimatedSwitch>
      </MainLayout>
    </BrowserRouter>
  </div>
);

export default App;