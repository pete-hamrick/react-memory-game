import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Game from './game/Game';
import Results from './results/Results';
import AboutMe from './aboutMe/AboutMe';
import Home from './home/Home';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <section>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/game' component={Game} />
            <Route path='/results' component={Results} />
            <Route path='/aboutMe' component={AboutMe} />
            <Route path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}
 
export default App;