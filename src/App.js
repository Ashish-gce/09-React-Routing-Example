import React from "react";
import "./App.css";
// here we are doing router configuration
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbars } from "./components/layout/Navbars";
import { Home } from "./components/layout/Home";
import { About } from "./components/layout/About";
import { Employees } from "./components/employees/Employees";
import { EmployeeDetails } from "./components/employees/EmployeeDetails";
import { Stocks } from "./components/stocks/Stocks";
import { StockDetails } from "./components/stocks/StockSetails";

const App = () => {
  return (
    <React.Fragment>
      {/* <nav className="navbar navbar-dark bg-secondary  navbar-expand-sm">
        <div className="container">
          <a href="/" className="navbar-brans text-white h3">
            GitHub Search App with React Hooks
          </a>
          <ul className="ml-auto font-weight-bold text-white">
            <li>Login</li>
          </ul>
        </div>
      </nav> */}

      <Router>
        <Navbars />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/employees" component={Employees} />
          <Route exact path="/employees/:id" component={EmployeeDetails} />
          <Route exact path="/stocks" component={Stocks} />
          <Route exact path="/stocks/:id" component={StockDetails} />
        </Switch>
      </Router>

      {/* <div style={{ marginBottom: 150 }}></div> */}
    </React.Fragment>
  );
};

export default App;
