import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.scss'
import ModalMenu from './components/ModalMenu/ModalMenu';

function App() {
  const [openModalMenu, setOpenModalMenu] = React.useState(false)

  return (
    <div className="App">
      <Header setOpenModalMenu={setOpenModalMenu} />
      <Main />
      {openModalMenu && <ModalMenu setOpenModalMenu={setOpenModalMenu} />}
    </div>
  );
}

export default App;
