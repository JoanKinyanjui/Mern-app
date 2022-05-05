import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import ExcerciseList from './Components/excercise-list.component';
import EditExcercise from './Components/edit-excercise.component';
import CreateExcercise from './Components/create-excercise.component';
import CreateUser from './Components/create-user.component';
import Navbar from './Components/navbar.components';

function App() {
  return (
    <Router>
      
    <div className='App'>
      <Navbar />
      <Routes>
    
        <Route exact path='/' element={<ExcerciseList />} />
        <Route exact path='/edit/:id'  element={<EditExcercise />}/>
        <Route exact path='/create' element={<CreateExcercise />} />
        <Route exact path='/user' element={<CreateUser/>} />
      
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
