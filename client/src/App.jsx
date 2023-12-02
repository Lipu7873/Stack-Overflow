import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AllRoutes from "./AllRoutes";
import { useEffect } from 'react';
import { fetchAllQuestions } from './actions/question';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/users';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])


  return (
    <>
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </>
  );
}

export default App
