import React from 'react';
import { browserHistory, Link } from 'react-router';
import Background from '../../shared/Backgrounds';
import s from './styles.scss';


class ErrorPage extends React.Component {

  render() {
        return (
        <div className={s.page}>
          <div className={s.container}>
            <div className={s.content}>
              <main className={s.menu}>
                <button onClick={browserHistory.goBack}>Back</button>
                <div></div>
                <Link to="/portfolio/about"><button>Main</button></Link>
              </main>

              <section className={s.picture}>
                <p>Sorry, no page here. Choose one of the options above to return back to the site,
                or you can stay here for a while and enjoy the sea view</p>
                <div><Background background="lighthouse" viewBox="0 0 429 221" width="auto" height="50%"/></div>
              </section>
            </div>
          </div>
        </div>
    );
  }

}

export default ErrorPage;
