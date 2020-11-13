import React, { useState, ReactNode, FC } from 'react';

export interface IProps {
  children: ReactNode;
}

export interface IThemeContext {
  theme: boolean,
  setTheme: Function
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: false,
  setTheme: () => {}
});

const ThemeProvider: FC<IProps> = props => {
  const [theme, setTheme] = useState(false);

  const wrapperClass = theme ? 'bp3-dark' : '';

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={wrapperClass}>
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
