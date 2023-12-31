import './App.css';
import { HashRouter as Router, Routes, Route, Links } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Cards } from './pages/Cards';
import { MultipleChoice } from './pages/MultipleChoice';
import { ShortAnswer } from './pages/ShortAnswer';
import { Matching } from './pages/Matching';
import { Import } from './pages/Import';
import { SimpleStudy } from './pages/SimpleStudy';
import { Decks } from './pages/Decks';

function App() {

  return (
    <div className="App">
      <h2>Study Application</h2>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/decks' element={<Decks/>}/>
          <Route path='/cards' element={<Cards/>}/>
          <Route path='/simple' element={<SimpleStudy/>}/>
          <Route path='/matching' element={<Matching/>}/>
          <Route path='/multiplechoice' element={<MultipleChoice/>}/>
          <Route path='/shortanswer' element={<ShortAnswer/>}/>
          <Route path='/importdeck' element={<Import/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
