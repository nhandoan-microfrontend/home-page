import React from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LandingPage from "./containers/LandingPage/LandingPage.container";
import TemplateList from "./containers/TemplateList/TemplateList.container";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/templates' exact component = {TemplateList}/>
        <Route path='/templates/:id' component ={LandingPage} />
        <Route path='/' exact component={LandingPage}/>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
