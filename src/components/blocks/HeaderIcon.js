import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import logo from '../../logo.png';

const HeaderIcon = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Internal Website</Header.Content>
    </Header>
    {/* <Image centered size='large' src='logo.png' /> */}
    <img src={logo} className="App-logo" alt="logo" />

  </div>
)

export default HeaderIcon