
import React, { PropTypes } from 'react';
import Navigation from './Navigation';
import s from './Header.scss';
import cn from 'classnames';
import Icon from '../../shared/Icon';

class Header extends React.Component {
  constructor(props) {
    super(props);

  this.showMenu  = this.showMenu.bind(this);
  this.bringOpacity = this.bringOpacity.bind(this);
  }

  componentDidMount() {
   window.addEventListener('scroll', this.showMenu);
 }
 componentWillUnmount() {
   window.removeEventListener('scroll', this.showMenu);
}



  showMenu(e) {
    let menu = this.refs.Fixed;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollTop >= 500) {
      menu.style.display = 'block';
      menu.style.opacity = 0.5;
    } else {
      menu.style.display = 'none';
      menu.style.opacity = 0;
    }

  }

  bringOpacity(e) {
    let rect = this.refs.Fixed.getBoundingClientRect().top,
        body = document.body.getBoundingClientRect().top,
        menu = this.refs.Fixed;
    if (rect - body >= 690) {
      if (e.type == 'mouseover') {
        menu.style.opacity = 1;
      } else {
        menu.style.opacity = 0.5;
      }
    }

  }



  render() {

    return (

      <header id="top">

        <div className={s.top} >

            <div className={s.top__left__side}>
              <div className={s['icon__box']}><Icon className={s.icon} viewBox='0 0 20 20' size="100%" icon="letter"/></div>
              <div className={s['icon__box']}><Icon className={s.icon} viewBox='0 0 20 20' size="100%" icon="letter-white"/></div>
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

        <div className={cn(s.menu__fixed, s['navigate--colourful'])} ref="Fixed" onMouseOver={this.bringOpacity} onMouseLeave={this.bringOpacity}>
            <Navigation />

        </div>
      </header>
    );
  }




}

export default Header;
