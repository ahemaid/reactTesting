import React,{ Route, Switch } from 'react';
import  App  from './App';
import  Article  from './Article';
// import { TopicList } from './views/TopicList';
// import { NoMatch } from './views/NoMatch';
// import { TopicDetail } from './components/TopicDetail';
// import { NavBar } from './components/NavBar';
// import { Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={<App />} />
        {/* <Route exact path="/">
          <Redirect to="/Home" />
        </Route> */}
        <Route exact path="/Article" component={<Article />} />
        {/* <Route exact path="/About" component={Home} />
        <Route exact path="/Topics" component={TopicList} />
        <Route path="/Topics/:topicId" component={TopicDetail} />
        <Route component={NoMatch} /> */}
      </Switch>
    </div>
  );
};

export default  Route;