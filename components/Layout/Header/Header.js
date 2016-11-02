
import React, { PropTypes } from 'react';
import Navigation from './Navigation';
import s from './Header.scss';
import cn from 'classnames';
import Icon from '../../public/Icon';

class Header extends React.Component {


  }

  render() {

    return (

      <header id="top">

        <div className={s.top} >

            <div className={s.top__left__side}>
              <div className={s.icon__box}><Icon className={s.icon} viewBox='0 0 20 20' size="100%" icon="letter"/></div>
            </div>

            <div className={s.top__right__side}>

              <ul>
                 <li onClick={this.showEmail}><a href="mailto:eugeneyaroshenko@gmail.com?subject='Project Enquiry'"><Icon icon='email' viewBox="0 0 20 20"/></a></li>
                 <li><a target="_blank" href="https://www.facebook.com/eugeneyar"><Icon icon='facebook' viewBox="0 0 20 20" /></a></li>
                 <li><a target="_blank" href="https://www.instagram.com/zhen9_9/"><Icon icon='instagram' viewBox="0 0 20 20" /></a></li>
                 <li><a target="_blank" href="https://github.com/EugeneDesigner"><Icon icon='github' viewBox="0 0 20 20" /></a></li>

              </ul>
            </div>
        </div>
        <div className={cn(s.navigate, s['navigate--colourful'])} ><Navigation  /></div>


    
      </header>
    );
  }




}

export default Header;
