import React from "react";

// Modules
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Utils
import store from "../../store";
import { routes } from "../../routes";

// Components
import HomePageView from "../HomePageView/HomePageView";
import StepperView from "../StepperView/StepperView";
import ScrollTop from "../../hoc/ScrollTop";

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollTop>
          <Switch>
            <Route exact path={routes.home} component={HomePageView} />
            <Route exact path={routes.checkout} component={StepperView} />
          </Switch>
        </ScrollTop>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
