import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
export default class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    // console.log(this.context)

    return (
      <AuthContext.Consumer>
        {authContext => (
          <ThemeContext.Consumer>
            {themecontext => {
              const {isAuthenticated, toggleAuth} = authContext;
              const { isLightTheme, light, dark } = themecontext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>This is react hook and context course</h1>
                  <div onClick={toggleAuth}>
                    { isAuthenticated? 'logged in' : 'logged out'}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}
