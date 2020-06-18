import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Alert } from 'react-bootstrap'
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js'


function App() {
  return (
    <div className="App">
      <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
    </Alert>
    </div>
  );
}

export default App;
