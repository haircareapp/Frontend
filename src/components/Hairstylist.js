import React, { useState, useEffect } from "react";
import axios from "axios";
import HairstylistCard from "./HairstylistCard";
import "../stylistCard.scss";

function Hairstylist() {
  const [stylists, setStylists] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("https://haircare-backend.herokuapp.com/api/users")
      .then(res => {
        // console.log("res: ", res);
        setStylists(res.data.users);
      })
      .catch(err => {
        console.error("handleSubmit: catch: err: ", err);
        if (err.response.status === 401) {
          alert("Please login to view our Hairstylists in your area.");
          window.location.href = "/Login";
          return;
        }
      });
  }, []);
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

  return (
    <div className="user-info">
      <h1> Stylists in your area</h1>
      <div className="flex-container">
        {stylists.map(user => (
          <HairstylistCard user={user} images={images} />
        ))}
      </div>
    </div>
  );
}

export default Hairstylist;
