import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Stylist(props) {
  const [defaultUser, setDefaultUser] = useState([]);
  const [portfolio, setPortfolio]=useState([]);
  const [posts, setPosts]=useState([]);
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
  }, []);
  console.log(portfolio, posts);
  return (
    <div className="user-portfolio-info">
      <h2>Stylist Portfolio Page:</h2>
      <ul>
        <li>Username: {defaultUser.username}</li>
        <li>Id: {defaultUser.id} </li>
        <li>User Id: {defaultUser.user_id} </li>
        <li>Image url: {defaultUser.profile_img}</li>
        <li>About: {defaultUser.about}</li>
        <li>Skills: {defaultUser.skills}</li>
      </ul>
      <div>
            <h3>Portfolio:</h3>
            {portfolio.map(port => (
              <div>
                <h4>Portfolio Snippet #{port.id}:</h4>
                <ul>
                  <li>ID:{port.id}</li>
                  <li>Stylists ID:{port.stylists_id}</li>
                  <li>Portfolio Image:{port.portfolio_image}</li>
                </ul>
              </div>
            ))}
          </div>
      <div>
            <h3>Posts:</h3>
            {posts.map(post => (
              <div>
                <h4>Post Snippet #{post.id}:</h4>
                <ul>
                  <li>ID: {post.id}</li>
                  <li>Stylists ID: {post.stylists_id}</li>
                  <li>Title: {post.title}</li>
                  <li>Description: {post.description}</li>
                  <li>Post Image: {post.posts_image}</li>
                </ul>
              </div>
            ))}
          </div>
    </div>
  );
}
