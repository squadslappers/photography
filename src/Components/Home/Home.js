import React from 'react';
// import Header from '../Header/Header';
import Intro from './Intro';
import Columns from './Columns';

const Home = (props) => {
  return (<div className='home'>
    <Intro
      primary='NEED A PHOTOGRAPHER?'
      description="WE'VE GOT YOU COVERED."
      link1='/'
      secondary="ARE YOU A PHOTOGRAPHER?"
      link2='/photographer'/>
    <Columns/>
  </div>)
}
export default Home;
