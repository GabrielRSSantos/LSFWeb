import { useEffect, useState } from 'react';
import { useUser } from './store/user';
import { Outlet } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import './App.css'
import Header from './components/Header/index.jsx';
import Login from './routes/Login/index.jsx';

export default function App() {

  const getAllUsers = useUser((state) => state.getAllUsers);
  const addToUser = useUser((state) => state.addToUser);
  const currentUser = useUser((state) => state.users);
  const [variosUsers, setVariosUsers] = useState([]);
  const [isLogged, setIsLogged] = useState(true);


  useEffect(() => {
    console.log("UseEffect!");
    const fetchUserData = async () => {
      await addToUser(103);
    };

    const fetchGetAll = async () => {
      console.log("fetchGetAll");
      var response = await getAllUsers(103);
      console.log(response);
    };

    fetchUserData();
    fetchGetAll();
  }, []);

  return (
    <div>
      {isLogged ?
        <div>
          <Header />
          <Outlet />
        </div>
        : <Login />
      }
    </div>
  )
}