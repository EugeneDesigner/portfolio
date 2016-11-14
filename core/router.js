import React from 'react';
import { Route, IndexRoute }  from 'react-router';
import Layout from '../components/Layout/Layout';
import About from '../pages/about/index';
import Development from '../pages/development/index';
import NotFound from '../pages/error/index';
import Intro from '../pages/intro/index';
import Projects from '../pages/projects/index';




  export default (
    <Route path='/'>
    <IndexRoute component={Intro} />
      <Route  path='/portfolio' component={Layout}>
      <Route path='/portfolio/about' component={About}/>
      <Route path='/portfolio/development' component={Development}/>
      <Route path='/portfolio/projects' component={Projects} />
    </Route>
    <Route path="*" path={NotFound}/>
    </Route>

  );
