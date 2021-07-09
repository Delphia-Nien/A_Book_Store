import React, { Component } from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

class ASidebar extends Component {
    render() {
        return(
        <div>
          <ProSidebar style={{ background:'#f44336', position:'fixed', height:'100%', width:'300px' }}>
                <SidebarHeader></SidebarHeader>
                <Menu>
                    <MenuItem style={{ fontSize:'25px' }}><a href='#picture-book' style={{ color:'white' }}>Picture Book</a></MenuItem>
                    <MenuItem style={{ fontSize:'25px' }}><a href='#fairy-tale' style={{ color:'white' }}>Fairy Tale</a></MenuItem>
                    <MenuItem style={{ fontSize:'25px' }}><a href='#play-book' style={{ color:'white' }}>Play Book</a></MenuItem>
                    <MenuItem style={{ fontSize:'25px' }}><a href='#touch-book' style={{ color:'white' }}>Touch Book</a></MenuItem>
                    <MenuItem style={{ fontSize:'25px' }}><a href='#audio-book' style={{ color:'white' }}>Audio Book</a></MenuItem>
                </Menu>
          </ProSidebar>
        </div>
        )}
}

export default ASidebar;
