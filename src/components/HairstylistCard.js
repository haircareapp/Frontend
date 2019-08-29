import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../stylistCard.scss";
// import StylelistData from "../StylelistData";

const Card = styled.div`
  width: 40%;
  padding: 15px 10px;
  margin: 0 auto;
  color: black;
  border: 1px solid grey;
  border-radius: 3px;
  box-shadow: 2px 4px black;
`;

export default function HairstylistCard(props) {
  const user = props.user;
  const images=props.images
  
  const image = images.find(imagine => imagine.img_id === `${user.id}`);
  // console.log(image);

  return (
    <div className="container">
      <NavLink className="NavLink" to={`/Hairstylist/${user.id}`}>
        <Card>
          <div key={image.img_id}>
            <img className="card-img" src={image.img_url} alt="profile" />
          </div>

          <div className="user-card-info">
            <ul key={user.id}>
              {/* <li>Image url: {user.profile_img}</li> */}
              <li>
                <h2>Name: {user.username}</h2>
              </li>
              {/* <li>Id: {user.id} </li>
              <li>User Id: {user.user_id} </li> */}
              <li> {user.about}</li>
              <li className="skills">Skills: {user.skills}</li>
            </ul>
          </div>
        </Card>
      </NavLink>
    </div>
  );
}
