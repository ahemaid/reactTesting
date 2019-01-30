  import React, { Component } from 'react';
  import './App.css';
  import {  Query, ApolloProvider } from 'react-apollo';
  import ApolloClient, { InMemoryCache  } from  'apollo-boost';
  import gql from "graphql-tag";
  import { Dropdown, Grid, Segment } from 'semantic-ui-react'
  import  MenuNameProp  from './components/blocks/MenuNameProp'
  import HeaderIcon from './components/blocks/HeaderIcon'
  import CardGroupProps from './components/blocks/CardGroupProps'
  import SideMenu from './components/blocks/SideMenu'
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
          { <HeaderIcon /> }
            </div>

            {/* <ExchangeRates  /> */}

            {/* {<DropdownExampleClearable  />} */}
          </div>
          <div className="ui container">

          <div className="ui header">
            { <MenuNameProp />}
            </div>
            </div>

            <div className="ui  container">
            <Grid>
    <Grid.Column width={11}>
    {<CardGroupProps />}
    </Grid.Column>
    <Grid.Column width={4}>
    {<SideMenu  />}
    </Grid.Column>
  </Grid>
            {/* <div >
              {<CardGroupProps />}
              {<GridExampleColumnWidth />}
              {<GridExampleColumnWidth />}

            </div> */}
            </div>

            {/* <footer>
              {/* <div className = "ui bottom menu">
              "hi"
              </div> }
              <div className="ui inverted  bottom borderless  menu "><div className="column"  >&copy; Lebenshilfe Bonn 2019</div></div>
            </footer> */}
    {/* <footer class="footer">
            <Segment className="ui inverted fixed  borderless" attached='bottom'>&copy; Lebenshilfe Bonn 2019</Segment>
            </footer> */}
            <footer>
            <div  className="ui inverted fixed vertical segment ">
            <div className="column"  >&copy; Lebenshilfe Bonn 2019</div>
            </div>
            </footer>
        </ApolloProvider>

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

  export default App;
