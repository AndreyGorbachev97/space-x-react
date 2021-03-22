import './css/index.css';
import { Fragment } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import { links, benefits } from './data';

function App() {

  return (
    <Fragment>
      <Header links={links} />
      <Intro benefits={benefits} />
    </Fragment>

  );
}

export default App;
