import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import Course from "./containers/Course/Course";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div
          style={{ width: "400px", margin: "10px auto", textAlign: "center" }}
        >
          <NavLink
            to="/users"
            style={{
              padding: "20px",
              textDecoration: "none",
              fontSize: "20px",
            }}
            activeStyle={{ color: "blue" }}
          >
            Users
          </NavLink>

          <NavLink
            to="/courses"
            style={{
              padding: "20px",
              textDecoration: "none",
              fontSize: "20px",
            }}
            activeStyle={{ color: "blue" }}
          >
            Courses
          </NavLink>
        </div>

        <Switch>
          <Route path="/" exact component={Courses} />
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />

          <Route
            component={() => (
              <div
                style={{
                  textAlign: "center",
                  fontSize: "22px",
                  marginTop: "20px",
                }}
              >
                {" "}
                404 Not Found{" "}
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
