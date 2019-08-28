import React, {useState , useEffect} from "react";
import axios from "axios";
import HairstylistCard from './HairstylistCard';
// import StylelistData from "../StylelistData";

function Hairstylist() {
  const [stylists, setStylists] = useState([]);
  useEffect(() => {
    axios
      .get("https://haircare-backend.herokuapp.com/api/users")
      .then(res => {
        // console.log("res: ", res);
        setStylists(res.data.users);
      })
      .catch(err => {
        console.error("handleSubmit: catch: err: ", err);
      });
  }, []);
  
  return(
    <div className="user-info">
        <h1> Users:</h1>
        <h2>Stylist Users:</h2>
        {stylists.map(user => (
          <HairstylistCard user={user} />
        ))}
        </div>
  )
}

export default Hairstylist;