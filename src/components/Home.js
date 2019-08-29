import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://haircare-backend.herokuapp.com/api/users/all")
      .then(res => {
        // console.log("res: ", res);
        setUsers(res.data.all);
      })
      .catch(err => {
        console.error("handleSubmit: catch: err: ", err);
      });
  }, []);

  return (
    <div className="user-info">
      <h1>Home</h1>
      <div className="user-info">
        <h2>All Users:</h2>
        <div className="user-list-info">
          <ul>
            {users.map(user => (
              <li key={user.email}>Email: {user.email}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
