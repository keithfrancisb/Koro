import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

// When ever the document has been loaded it executes everything inside the call back
document.addEventListener('DOMContentLoaded', () =>
{
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
