import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Course from "../Course/Course";
import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <Link
                to={
                  this.props.match.url +
                  "/" +
                  course.id +
                  "?title=" +
                  course.title
                }
              >
                <article className="Course" key={course.id}>
                  {course.title}
                </article>
              </Link>
            );
          })}
        </section>
        <Switch>
          <Route path={this.props.match.url + "/:id"} component={Course} />
        </Switch>
      </div>
    );
  }
}

export default Courses;
