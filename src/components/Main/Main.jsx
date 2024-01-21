import React from 'react';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';
import './Main.scss'

const Main = () => {
  return (
    <main className='main'>
      <SideBar />
      <Content />
    </main>
  );
};

export default Main;