import React from 'react';
import { FloatingActionButton } from 'material-ui';
import styled from 'styled-components';
import Menu from 'material-ui/svg-icons/navigation/menu';

const StayVisible = styled.div`
  position: absolute;
  margin-left: ${props => (props.open ? `${props.width}px` : 'none')};
  transition: margin .25s;
`;

export const NavToggleButton = ({ toggle, open, width }) =>
  <StayVisible open={open} width={width}>
    <FloatingActionButton onTouchTap={toggle}>
      <Menu />
    </FloatingActionButton>
  </StayVisible>;
