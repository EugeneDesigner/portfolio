import React, { PropTypes } from 'react'
import Layout from '../../components/Layout'
import s from './styles.scss'
import cn from 'classnames'
import { data } from './ProjectData'




export default class ProjectsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      data,
      previous: "",
      count: 0
    }
    const { previous, count } = this.state;
    this.showDescription = this.showDescription.bind(this);
    this.imageShow = this.imageShow.bind(this);

  }



  imageShow(name) {

    if (this.state.count == 0) {
      this.setState({
        showPopUp: true,
        name,
        count: 1
      })
    } else {
      this.setState({
        showPopUp: false,
        count: 0
      })
    }
  }

  showDescription(e) {

    let n = e.currentTarget.lastChild;

    if (n.tagName == 'DIV') {

        if (this.state.previous) {
            this.state.previous.style.display = 'none';
            this.state.previous.style.height = 0;
        };


        n.style.display = 'block';
        n.style.height = '50%';



        this.setState({
          previous: n
        });
      }
   }





  render() {
    let stock = this.state.data;


    const PopUp = (props) => {
      const { name } = props
      return (
        <div className={s.lightbox} >
          <div className={s.lightbox__box}>
            <a className={s.close} onClick={this.imageShow}>X</a>
            <img src={"http://localhost:3000/dist/" + props.name}/>
          </div>

       </div>
      )
    }

    return (
      <div className={s.content}>
        <div className={s.works}>
          <p>Below are some of my works I've done throughout the past year.
             Feel free to look around, try them out. I hope you will like them.
             And yeah, I would be happy to answer all your questions, just
             throw me a message via the links provided above</p>

        </div>
            <div className={s.thumbnails} >

            {
              stock.map((project, key) => {
                return (
                  <div className={project.section == 'Design' || project.section == 'Art' ? s['thumbnails_item--art'] : s.thumbnails_item} onClick={this.showDescription}>
                    <div className={cn(s.thumbnails__column, s[project.name])}><div className={s['thumbnails__column--slide']}>
                      <h3>{project.section}</h3>
                      <p>{project.title}</p>
                    </div></div>
                  <div className={s.thumbnails__description} onClick={this.showDescription}>
                        <h2>Task</h2>
                          <p>{project.task}</p>
                        <h2>Used technologies</h2>
                          <p>{project.technology}</p>
                        <a target="_blank" href={project.link} onClick={!project.link ? () => this.imageShow(project.name) : null} className={s.thumbnails__description__result}>  {project.section == "Website" ? 'Result' : 'Explore'} </a>
                  </div>

                </div>

                )
              })
            }




        {this.state.showPopUp ? <PopUp name={this.state.name}/> : null}


    {/* <div className={s.thumbnails_item} onClick={this.showDescription} ref="describe">
      <div className={cn(s.thumbnails__column, s.country)}><div className={s['thumbnails__column--slide']}>
            <h3>Website</h3>
            <p>Project 'My Country': presenting my home</p>
      </div></div>
      <div className={s.thumbnails__description} >
            <h2>Task</h2>
              <p>Create page to display the 1+1 'My Country' project for the guests from abroad</p>
            <h2>Used technologies</h2>
              <p> React, Redux, Foundation, Webpack</p>
            <a target="_blank" onClick={this.imageShow} className={s.thumbnails__description__result}>  result </a>
      </div>

      </div> */}

        {/* <div className={s.thumbnails_item} onClick={this.showDescription}>
          <div className={cn(s.thumbnails__column, s.soundcloud)}><div className={s['thumbnails__column--slide']}>
                <h3>API</h3>
                <p>Soundcloud/<span>Soundcloud</span>: Copy of the App</p>
          </div></div>
          <div className={s.thumbnails__description}>
                <h2>Task</h2>
                  <p>Develop a React copy of the popular Soundcloud web application</p>
                <h2>Used technologies</h2>
                  <p> React, Redux, REST API, Webpack</p>
                <a target="_blank" className={s.thumbnails__description__result}>  result </a>
          </div>*/}

          </div>

      </div>
    );
  }

}
