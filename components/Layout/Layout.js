
import React, { PropTypes } from 'react';
import cn from 'classnames';
import Header from '../Header/Header';
import s from './Layout.scss';




class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };


  render() {

    return (

      <div className={s.container}>
          <Header />
          <main className={s.content}>
            <div {...this.props} className={cn(s.container, this.props.className)} />
          </main>
        </div>

    );
  }
}

export default Layout;
