import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('Addition', () => {
  it('2 + 2 should be 4', () => {
  expect(2 + 2).toBe(4);
  });
  });
  