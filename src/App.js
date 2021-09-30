import React from 'react';
import './App.css';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Content from './Content/Content';


class App extends React.Component {
      render() {
        return(
          <div className="container">
            <Header />
            <div className="main">
              <Menu />
              <Content />
            </div>
          </div>
        )
      }
}
 

export default App;
