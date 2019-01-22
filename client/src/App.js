  import React, { Component } from 'react';
  import logo from './logo.png';
  import './App.css';
  import {  Query, ApolloProvider } from 'react-apollo';
  import ApolloClient, { InMemoryCache  } from  'apollo-boost';
  import gql from "graphql-tag";
  import { Dropdown } from 'semantic-ui-react'
  import  MenuExampleNameProp  from './components/blocks/MenuExampleNameProp'
  import HeaderExampleUsersIcon from './components/blocks/HeaderExampleUsersIcon'

  const cache = new InMemoryCache();

  // const client = new ApolloClient({
  //   link: new HttpLink(),
  //   cache
  // });

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache
  });

  // client
  //   .query({
  //     query: gql`
  //       {
  //         employee(id: "1") {
  //           id

  //         }
  //       }
  //     `
  //   })
  //   .then(result => console.log(result));

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


  // const channelsListQuery = gql`
  //    query ChannelsListQuery {
  //      channels {
  //        id
  //        name
  //      }
  //    }
  //  `;
  // const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);

  // // const ChannelsList = () =>
  // //      (<ul>
  // //        <li>Channel 1</li>
  // //        <li>Channel 2</li>
  // //      </ul>);

  // const ChannelsList = ({ data: {loading, error, channels }}) => {
  //   if (loading) {
  //     return <p>Loading ...</p>;
  //   }
  //   if (error) {
  //     return <p>{error.message}</p>;
  //   }
  //   return <ul>
  //     { channels.map( ch => <li key={ch.id}>{ch.name}</li> ) }
  //   </ul>;
  // };




  class App extends Component {
    render() {
      return (
        <ApolloProvider client={client}>

          <div className="App">
            {/* <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Willkommen bei Lebenshilfe Bonn</h2>
            </div> */}
            <div>
          { <HeaderExampleUsersIcon /> }
            </div>

            {/* <ExchangeRates  /> */}

            {<DropdownExampleClearable  />}
          </div>

          <div className="ui header">
            { <MenuExampleNameProp />}
            </div>
        </ApolloProvider>

      );
    }
  }


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

  export default App;