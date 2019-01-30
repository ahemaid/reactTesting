import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import logo from '../../logo.png';

const HeaderIcon = () => (
  <div>
    <Header as='h3' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Internal Website</Header.Content>
    </Header>
    <img src={logo} className="App-logo" alt="logo" />

  </div>
)

export default HeaderIcon