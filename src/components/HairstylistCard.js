import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
// import StylelistData from "../StylelistData";

const Card = styled.div`
  display: flex;
  width: 40%;
  padding: 15px 10px;
  color: white;
  background: black;  
  border: 2px solid #fffff;
`;

export default function HairstylistCard(props) {
  const user = props.user;
  console.log(user);

  return (
    <div>
      <NavLink to={`/Hairstylist/${user.id}`} >
      <Card>
      <div className="user-card-info">
            <ul key={user.id}>
              <li>Username: {user.username}</li>
              <li>Id: {user.id} </li>
              <li>User Id: {user.user_id} </li>
              <li>Image url: {user.profile_img}</li>
              <li>About: {user.about}</li>
              <li>Skills: {user.skills}</li>
            </ul>
            <br />
            <br />
          </div>
      </Card>
      </NavLink>
    </div>
  );
}
