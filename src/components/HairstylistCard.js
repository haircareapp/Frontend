import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../stylistCard.scss";

const Card = styled.div`
  width: 400px;
  height: 450px;
  padding: 15px 10px;
  margin: 15px;
  color: #393939;
  border-radius: 3px;
  box-shadow: 2px 3px 5px #4a4a4a;
  @media(max-width: 431px){
    width: 380px;
    height: 430px;
    padding: 10px;
  }
`;

export default function HairstylistCard(props) {
  const user = props.user;
  const images = props.images;

  let image = images.find(imagine => imagine.img_id === `${user.id}`);
  // console.log(image);
  if (!image) {
    image = {
      img_id: "1",
      img_url:
        "https://images.unsplash.com/photo-1519831636921-a6eb08886aeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    };
  }
  return (
    <div className="container">
        <Card>
      <NavLink className="NavLink" to={`/Hairstylist/${user.id}`}>
          <div>
            <img className="card-img" src={image.img_url} alt="profile" />
          </div>
          <div className="user-card-info">
            <div key={user.id}>
              {/* <li>Image url: {user.profile_img}</li> */}
                <h2>{user.username}</h2>
              {/* <li>Id: {user.id} </li>
              <li>User Id: {user.user_id} </li> */}
              <p> {user.about}</p>
              <p className="skills">Skills: {user.skills}</p>
            </div>
          </div>
      </NavLink>
        </Card>
    </div>
  );
}
