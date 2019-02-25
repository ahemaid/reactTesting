import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import logo from '../../logo.png';

const HeaderIcon = () => (
  <div>
          <img src={logo} className="App-logo" alt="logo" />

    <Header as='h3' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Internal Website</Header.Content>

    </Header>

  </div>
)

export default HeaderIcon