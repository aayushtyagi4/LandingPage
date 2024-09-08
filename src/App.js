import './App.css';
import { Navbar } from './components/page1/Navbar';
import { Page } from './components/page1/Page';
import { NewPage } from './components/Page2/NewPage';
import {Lastpage} from './components/page3/Lastpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Page/>
      <NewPage/>
      <Lastpage/>
    </div>

  );
}

export default App;
