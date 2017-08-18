import React, { Component } from 'react';
import { Drawer, MenuItem, Divider } from 'material-ui';
import { Link } from 'react-router';
import { NavToggleButton } from './styled/NavDrawerStyled';

class NavDrawer extends Component {
  state = {
    open: true,
    width: 250
  };

  toggle = () => {
    this.setState((prevState, props) => {
      return {
        open: !prevState.open
      };
    });
  };

  render() {
    return (
      <div>
        <NavToggleButton
          toggle={this.toggle}
          width={this.state.width}
          open={this.state.open}
        />
        <Drawer open={this.state.open} width={this.state.width}>
          <div
            style={{
              height: '200px',
              width: '!00%',
              backgroundColor: 'salmon'
            }}
          >
            Login containers
          </div>
          <Link to="/">
            <MenuItem onTouchTap={this.toggle} primaryText={'Play'} />
          </Link>
          <Divider />
          <Link to="/profile">
            <MenuItem onTouchTap={this.toggle} primaryText={'Profile'} />
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default NavDrawer;
