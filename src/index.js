// // import React from 'react';
// // import ReactDOM from 'react-dom';
//  import './index.css';
// // import * as serviceWorker from './serviceWorker';
// // ReactDOM.render(<App />, document.getElementById('root'));
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// // import ReactDOM from 'react-dom';
// // import { BrowserRouter as Router } from 'react-router-dom';
// // import { Routes}  from './routes'; // where we are going to specify our routes
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//    <App />
//   ,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Article from './Article';


ReactDOM.render(
    <BrowserRouter >
      <div>
      <Route path="/" component={ App } />
        <Route path="/Article" component={ Article } />


      </div>

    </BrowserRouter>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
