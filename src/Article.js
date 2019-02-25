import React, { Component ,BrowserRouter as Router, Route, Link }  from 'react';
import {  Query, ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache  } from  'apollo-boost';
import gql from "graphql-tag";
import { Dropdown, Grid, Segment } from 'semantic-ui-react'
import  MenuNameProp  from './components/blocks/MenuNameProp'
import HeaderIcon from './components/blocks/HeaderIcon'
import CardGroupProps from './components/blocks/CardGroupProps'
import SideMenu from './components/blocks/SideMenu'

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


export default class Article extends Component {
  render() {
    return (


        <div className="ui container">
        <h3> hallo</h3>
         <div className="ui big header">
          { <MenuNameProp />}
          </div>





          <footer>
          <div  className="ui inverted fixed vertical segment ">
          <div className="column"  >Kontaktme</div>
          <div className="column"  >&copy; Lebenshilfe Bonn 2019</div>
          </div>
          </footer>
          </div>



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
