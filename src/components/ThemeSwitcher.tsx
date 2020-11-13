import React, { useContext, useEffect } from 'react';
import { Switch } from '@blueprintjs/core';
import styled from 'styled-components';

import { ThemeContext } from './ThemeProvider';
import LocStor from '../tools/LocStor';

const StyledSwitch = styled(Switch)`
  margin: 0px;
`;

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (): void => {
    const newTheme = !theme;
    LocStor.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const locTheme = LocStor.getItem('theme');
    if (locTheme) {
      setTheme(locTheme);
    } else {
      LocStor.setItem('theme', false);
    }
  }, []);

  return <StyledSwitch checked={theme} onChange={toggleTheme} />;
}
