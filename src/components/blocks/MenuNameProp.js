import React, { Component } from 'react';
import {   Container,  Menu  } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//  export default class MenuExampleNameProp extends Component {
//     state = {}
  
//     handleItemClick = (e, { name }) => this.setState({ activeItem: name });

//     routeChange(){
//       let path = `https://www.lebenshilfe-bonn.de`;
//       window.location = path;
//       }
  
//     render() {
//       const { activeItem } = this.state
  
//       return (
//         <Menu>
//           <Menu.Item
//             name='Home'
//             active={activeItem === 'Home'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Item
//             name={'Lenenshilfe-Bonn Website'}
//             active={activeItem === 'Lenenshilfe-Bonn Website'}
//             onClick={this.routeChange}
//           />
//           <Menu.Item
//             name='ConSense'
//             active={activeItem === 'ConSense'}
//             onClick={this.handleItemClick}
//           />
//         </Menu>
//       )
//     }
//   }
  


export default class MenuNameProp extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  routeChange(){
    let path = `https://www.lebenshilfe-bonn.de`;
    console.log(path)
    window.location = path;
    }

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Menu fixed='top'  inverted>
      <Container>
      <Menu.Item>
          <img src='https://www.lebenshilfe-bonn.de/favicon.ico' alt="logo"  />
        </Menu.Item>
        <Menu.Item 
        as={Link}
        to="/"
        name='home'  onClick={this.handleItemClick} />
        <Menu.Item
            name={'Lenenshilfe-Bonn Website'}
            active={activeItem === 'Lenenshilfe-Bonn Website'}
            onClick={this.routeChange}
        />
        <Menu.Item
          name='Consense'
          active={activeItem === 'Consense'}
          onClick={this.handleItemClick}
        />
        </Container>
      </Menu>
      </div>

    )
  }
}