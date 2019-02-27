import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'

export default class SideMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  routeChange(props){
    let path = `/`;
    console.log(props)
    window.location = path;
    }


  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>
        <Menu.Item
                      name='Home'
                      active={activeItem === 'Home'}
                    onClick={this.routeChange}
                    >
          Home
          <Menu.Menu>
            <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
              Add
            </Menu.Item>
            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
              Remove
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
          <Icon name='grid layout' />
          Browse
        </Menu.Item>
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        >
          Stichwoerter
        </Menu.Item>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

{/* 
        <Dropdown item text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown> */}
      </Menu>
    )
  }
}