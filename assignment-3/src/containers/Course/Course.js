import React, { Component } from "react";

class Course extends Component {
  state = {
    courseTitle: null,
  };

  componentDidMount() {
    this.fillTitle();
    console.log("Props", this.props);
  }

  componentDidUpdate() {
    this.fillTitle();
  }

  fillTitle() {

    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (this.state.courseTitle !== param[1])
        this.setState({ courseTitle: param[1] });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
        <p>{this.state.courseTitle}</p>
      </div>
    );
  }
}

export default Course;
