import './App.css';
import NavRoute from './navRoute';
import axios from "axios";
import {AuthContextProvider} from "./context/authContext";

axios.defaults.withCredentials=true;


function App() {
  return (
    <>
    <AuthContextProvider>
     <NavRoute />
    </AuthContextProvider>
    </>
  );
}

export default App;
