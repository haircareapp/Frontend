import React, {useState , useEffect} from "react";
import axios from "axios";
import HairstylistCard from './HairstylistCard';

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
  
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(`./StylistData.json`)
      .then(res => {
        // console.log("res: ", res.data);
        setImages(res.data);
      })
      .catch(err => {
        console.error("handleSubmit: catch: err: ", err);
      });
  }, []);

  return(
    <div className="user-info">
        <h1> Stylist</h1>
        <h2>List of Stylist in your area</h2>
        {stylists.map(user => (
          <HairstylistCard user={user} images={images}/>
        ))}
        </div>
  )
}

export default Hairstylist;