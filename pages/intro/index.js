import React, { Component } from 'react';
import s from './style.scss';

import NavLink from '../../core/NavLink';
import Icon from '../../shared/Icon';
import Background from '../../shared/Backgrounds';



class Intro extends Component {
  render() {
    return (
      <div>
        <div className={s.main}>
          <div className={s.main__leftcolumn}>

            <div className={s.main__leftcolumn__logo}><Background height="250px" viewBox="602 528.216 120.125 90.625" background="biglogo"/></div>
          </div>
          <div className={s.main__rightcolumn}>
              <p className={s.main__rightcolumn__name}> Hi&#44; my name is Eugene</p>
              <p className={s.main__rightcolumn__welcome}>Very nice to meet you&#33;</p>
              <p className={s.main__rightcolumn__follow}> Come on in :-)</p>
              <div className={s.main__rightcolumn__enter}>
                <NavLink to="/portfolio/about"><Icon size="60px" className={s.icon} viewBox="0 0 20 20" icon='letter'/>
                </NavLink>
              </div>
          </div>
      </div>
    </div>
    )
  }
}

export default Intro;
