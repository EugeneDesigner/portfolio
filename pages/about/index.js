
import React, { Component } from 'react';
import Layout from '../../components/Layout';
import s from './styles.scss';
import Icon from '../../shared/Icon';
import Background from '../../shared/Backgrounds';


class AboutPage extends Component {

  render() {
    return (
      <div className={s.content}>
        <section className={s.content__intro}>
        <h4 className={s['content__intro__title']}>I am a Web Developer, Artist, Human <Icon size="20px" viewBox="0 0 14.086 20.059" icon="balloon"/></h4>
          <div className={s['content__intro__background']}><Background viewBox="0 0 2130 2001" background="mountains" /></div>

        </section>


        <section className={s.content__citation}>
          <p>Being always fascinated by art, for a long time I did not know how to establish myself as an artist.
             All my drawings and ideas could not find their way to people, and my strive to create was becoming less and less prominent.
             But after I wrote my first HTML page with a simple text "Hello world!" more than a year ago, I have come to the point where
            I am able to create and share my work with the world, trying to make someone's life a bit better. And that makes me extremely happy!
            </p>
        </section>

        <section className={s.content__principles}>
            <div className={s.section__title}><p>My Three 'Web Developer' Principles:</p></div>

            <div className={s.section__view}>
              <div >
                <div className={ s.content__principles__thumbnail}><Icon size="100%" viewBox="0 0 360 360" icon="lego1"/></div>
                <div className={s.content__principles__describe}>Make my work fly <s>damn</s> <span className={s['describe--fast']}>fast</span> </div>
              </div>
              <div>
                <div className={s.content__principles__thumbnail}> <Icon size="100%" viewBox="0 0 360 360" icon="lego2"/></div>
                <div className={s.content__principles__describe}>Make it look <span className={s['describe--great']}>great</span> </div>
              </div>
              <div>
                <div className={s.content__principles__thumbnail}><Icon size="100%" viewBox="0 0 360 360" icon="lego3"/></div>
                <div className={s.content__principles__describe}>Guarantee it serves <span className={s['describe--long']}>long</span></div>
              </div>
            </div>
        </section>

        <section className={s.content__instruments}>

        <div className={s.section__title}><p> To implement those principles, I use the following instruments:</p></div>

        <div className={s.section__view}>
          <div className={s.content__instrument__column}>
            <div className={s.bubble}><Icon size="100%" viewBox="0 0 180 180" icon="house"/></div>
            <ul className={s.list_left}><span className={s.list_title}>Exterior</span>
              <li>HTML5, CSS3</li>
              <li>Bootstrap, Foundation, Susy, 960</li>
              <li> SASS, PostCSS, CSS Modules</li>
              <li>Illustrator, Sketch, Photoshop</li>
            </ul>
          </div>

          <div className={s.content__instrument__column}>
              <div className={s.bubble}><Icon size="100%" viewBox="0 0 180 180" icon="sofa"/></div>
            <ul className={s.list_right}><span className={s.list_title}>Interior</span>
              <li>Javascript (ES6, Typescript)</li>
              <li>ReactJS &#38; Redux (SPA, Isomorphics Apps)</li>
              <li>Node &#38; Express (REST, GraphQL)</li>
              <li>Webpack, Gulp</li>
              <li>Karma, Jasmine, Chai</li>

            </ul>

          </div>
        </div>


        </section>




      </div>
    );
  }

}

export default AboutPage;
