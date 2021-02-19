import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
<<<<<<< HEAD
=======
  ReactDOM.unmountComponentAtNode(div);
>>>>>>> 2261f0c789fa634e332c063241442a545305394c
});
