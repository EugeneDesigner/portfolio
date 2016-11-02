import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.scss';


class ProjectsPage extends React.Component {





  render() {
    return (
      <div className={s.content}>
        <div className={s.works}>
          <p>Below are some of my works I've done throughout the past year.
             Feel free to look around, try them out. I hope you will like them.
             And yeah, I would be happy to answer all your questions, just
             throw me a message via the links provided above</p>
        </div>


        <div className={s.thumbnails}>


          <div className={s.thumbnails__column} id="a"><div className={s['thumbnails__column--slide']}>
                <h3>Website</h3>
                <p>Project 'Aquaria': Content first</p>
          </div></div>
          <div className={s.thumbnails__description} id="a">
                <h1>Task</h1>
                  <p>Redesign the <a>website</a> - responsiveness, mobile, modern approach</p>
                <h2>Used technologies</h2>
                  <p> Bootstrap, jQuery, Gulp, Jekyll</p>
                <a target="_blank" className={s.thumbnails__description__result}>  result </a>
          </div>


          <div className={s.thumbnails__column} id="b"><div className={s['thumbnails__column--slide']}>
                <h3>Website</h3>
                <p>Project 'My Country': presenting my home</p>
          </div></div>
          <div className={s.thumbnails__description} id="a">
                <h1>Task</h1>
                  <p>Create page to display the 1+1 'My Country' project for the guests from abroad</p>
                <h2>Used technologies</h2>
                  <p> React, Redux, Foundation, Webpack</p>
                <a target="_blank" className={s.thumbnails__description__result}>  result </a>
          </div>



          <div className={s.thumbnails__column} id="c"><div className={s['thumbnails__column--slide']}>
                <h3>API</h3>
                <p>Soundcloud/<span>Soundcloud</span>: Copy of the App</p>
          </div></div>
          <div className={s.thumbnails__description} id="a">
                <h1>Task</h1>
                  <p>Develop a React copy of the popular Soundcloud web application</p>
                <h2>Used technologies</h2>
                  <p> React, Redux, REST API, Webpack</p>
                <a target="_blank" className={s.thumbnails__description__result}>  result </a>
          </div>



          <div className={s.thumbnails__column} id="d"><div className={s['thumbnails__column--slide']}>
                <h3>Website</h3>
                <p>Project 'Personalise my favourite websites'</p>
          </div></div>
          <div className={s.thumbnails__description} id="a">
                <h1>Task</h1>
                  <p>Build a personalised and nicely designed environment of favourite websites for better browser experience</p>
                <h2>Used technologies</h2>
                  <p> React, Redux </p>
                <a target="_blank" className={s.thumbnails__description__result}>  result </a>
          </div>


       </div>

      </div>
    );
  }

}

export default ProjectsPage;
