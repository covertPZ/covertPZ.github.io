import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';

import './index.css';

const reactElement = document.getElementById('react');
render(<App />, reactElement);