import React from 'react';
import {
  Button,
  Navbar,
  NavbarGroup,
  NavbarDivider,
  NavbarHeading,
  Alignment,
} from '@blueprintjs/core';

import ThemeSwitcher from './ThemeSwitcher';

export default function NavbarComponent() {
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>JAVASCRIPTOR ADMIN</NavbarHeading>
        <NavbarDivider />
        <Button className="bp3-minimal" icon="home" text="Profile" />
        <Button className="bp3-minimal" icon="document" text="Files" />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <ThemeSwitcher />
      </NavbarGroup>
    </Navbar>
  );
}
