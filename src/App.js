  import React, { Component , Switch } from 'react';
  import { Router, Route } from 'react-router';
  import './App.css';
  import {  Query, ApolloProvider } from 'react-apollo';
  import ApolloClient, { InMemoryCache  } from  'apollo-boost';
  import gql from "graphql-tag";
  import { Dropdown, Grid, Segment } from 'semantic-ui-react'
  import  MenuNameProp  from './components/blocks/MenuNameProp'
  import HeaderIcon from './components/blocks/HeaderIcon'
  import CardGroupProps from './components/blocks/CardGroupProps'
  import SideMenu from './components/blocks/SideMenu'
  import Article from './Article'
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache
  });



    const ExchangeRates = () => (
      <Query
        query={gql`
          {
            employee(id: 1) {
              id
              name
              email
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return (
            <div key={data.employee.id}>
              <p>id: {data.employee.id}</p>
              <p>name: {data.employee.name}</p>
              <p>email: {data.employee.email}</p>
            </div>
          )
          ;
        }}
      </Query>
    );


  const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]

  const DropdownExampleClearable = () => <Dropdown clearable options={options} selection />


  export default class App extends Component {
    render() {
      return (
        // <Router> 

        <ApolloProvider client={client}>
                  <div id="App" className="App">


          <div className="ui container">

          <div className="ui big header">
            { <MenuNameProp />}
            </div>

            </div>

            <div  className="ui second container">
            <Grid>

    <Grid.Column width={10}>
    <div>
          { <HeaderIcon /> }
            </div>
    {<CardGroupProps />}
    </Grid.Column>
    <Grid.Column width={6}>
    {<SideMenu  />}
    </Grid.Column>
  </Grid>

  </div>

            <footer>
            <div  className="ui inverted fixed vertical segment ">
          <div className="column"  >Kontakt: Susanne Land  &  Katrin Lankers    über      Kontakt@lebenshilfe-bonn.de</div>
          <div className="column"  >&copy; Lebenshilfe Bonn 2019</div>
            </div>
            </footer>
            {/* <Switch>
        <Route exact path="/" component={<App />} />
        {/* <Route exact path="/">
          <Redirect to="/Home" />
        </Route> */}
        {/* <Route exact path="/Article" component={<Article />} /> */}
        {/* <Route exact path="/About" component={Home} />
        <Route exact path="/Topics" component={TopicList} />
        <Route path="/Topics/:topicId" component={TopicDetail} />
        <Route component={NoMatch} /> */}
      {/* </Switch> */} */}

            </div>

        </ApolloProvider>
        // {/* </Router> */}


      );
    }
  }

//   var styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: 'red',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//     topBox: {
//         flex: 1,
//         flexDirection: 'row',
//         backgroundColor: 'lightgray',
//         justifyContent: 'center',
//         alignItems: 'center',
//         //text-align: 'center'
//     },
//     headline: {
//         fontWeight: 'bold',
//         fontSize: 18,
//     marginTop: 0,
//         width: 200,
//         height: 80,
//     backgroundColor: 'yellow',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//   otherContainer: {
//         flex: 4,
//         justifyContent: 'center',
//         alignItems: 'center',
//     backgroundColor: 'green',
//     },


// });

  //  class App extends Component {
  //   render() {
  //     return (  <ApolloProvider client={client}>
  //     <div>
  //       <h2>My first Apollo app 🚀</h2>
  //     </div>
  //   </ApolloProvider>
  //     );
  //   }
  // }

  // export default App;
