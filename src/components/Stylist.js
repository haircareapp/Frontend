import React, { useState, useEffect } from "react";
import axios from "axios";
// import styled from "styled-components";

export default function Stylist(props) {
  const [defaultUser, setDefaultUser] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [posts, setPosts] = useState([]);
  const [pics, setPics] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://haircare-backend.herokuapp.com/api/users/${props.match.params.id}`
      )
      .then(res => {
        // console.log("res: ", res.data.stylist);
        setDefaultUser(res.data.stylist);
        setPortfolio(res.data.stylist.portfolio);
        setPosts(res.data.stylist.posts);
      })
      .catch(err => {
        console.error("handleSubmit: catch: err: ", err);
      });
  }, [props.match.params.id]);
  // console.log(portfolio, posts);

  useEffect(() => {
    axios
      .get(`../StylistData.json`)
      .then(res => {
        // console.log("res: ", res.data);
        setPics(res.data);
      })
      .catch(err => {
        console.error("handleSubmit: catch: err: ", err);
      });
  }, []);
  let pic = pics.find(image => image.img_id === `${props.match.params.id}`);
  if (!pic) {
    pic = {
      img_id: "1",
      img_url:
      "https://images.unsplash.com/photo-1519831636921-a6eb08886aeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    };
  }
  // console.log(pic);

  return (
    <div className="user-portfolio-info">
      <h2>{defaultUser.username}</h2>
      <div>
        <img src={pic.img_url} alt={defaultUser.username} />
        <ul>
          {/* <li>Username: {defaultUser.username}</li> */}
          {/* <li>Id: {defaultUser.id} </li> */}
          {/* <li>User Id: {defaultUser.user_id} </li> */}
          <li>About: {defaultUser.about}</li>
          <li>Skills: {defaultUser.skills}</li>
        </ul>
      </div>
      <div>
        <h3>Portfolio:</h3>
        {portfolio.map(port => (
          <div>
            <h4>Project {port.id}:</h4>
            <ul>
              {/* <li>ID:{port.id}</li> */}
              {/* <li>Stylists ID:{port.stylists_id}</li> */}
              <li>Portfolio Image:{port.portfolio_image}</li>
            </ul>
          </div>
        ))}
      </div>
      <div>
        <h3>Posts:</h3>
        {posts.map(post => (
          <div>
            <h4>{post.title}</h4>
            <ul>
              {/* <li>ID: {post.id}</li> */}
              {/* <li>Stylists ID: {post.stylists_id}</li> */}
              <li>Description: {post.description}</li>
              <li>Post Image: {post.posts_image}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
