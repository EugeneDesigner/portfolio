

import React from 'react';
import NavLink from '../../core/NavLink';
import Icon from '../../shared/Icon';

class Navigation extends React.Component {

  constructor(props) {
    super(props)

    this.scrollTop = this.scrollTop.bind(this);

  }

  scrollTop(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <nav>
        <ul>
          <li> <a href="#top" onClick={this.scrollTop}><Icon viewBox='0 0 20 20' size="40px" icon="letter"/></a></li>
          <li><NavLink to="/portfolio/about" >_Who?</NavLink></li>

          <li><NavLink to="/portfolio/projects">_What?</NavLink></li>

          <li><NavLink to="/portfolio/development">_How?</NavLink></li>
        </ul>
      </nav>
    );
  }

}

export default Navigation;
