import React from "react";
import "./App.css";
import { Route, BrowserRouter, Switch, Router } from "react-router-dom";
import LandingPage from "./containers/LandingPage/LandingPage.container";
import TemplateList from "./containers/TemplateList/TemplateList.container";
import {createBrowserHistory} from 'history'

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history} >
      <Switch>
        <Route path='/templates' exact component = {TemplateList}/>
        <Route path='/templates/:id' component ={LandingPage} />
        <Route path='/' exact component={LandingPage}/>
      </Switch>

    </Router>
  );
}

export default App;
