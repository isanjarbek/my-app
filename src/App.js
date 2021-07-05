import React, { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/Users";
import axios from "axios";
import CreateUser from "./components/CreateUser";

function App() {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:5000/api/users";

  const fetchData = async () => {
    await axios.get(url).then((res) => setUsers(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <div className="App">
      <CreateUser />
      <Users users={users} />
    </div>
  );
}

export default App;
