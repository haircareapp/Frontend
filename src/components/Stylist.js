import React, { useState, useEffect } from "react";
import axios from "axios";
import "../stylistCard.scss";
// import styled from "styled-components";
import "../stylist.scss";

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
        window.location.href = "/Hairstylists";
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
      <div className="user-header">
        <div className="user">
          <img
            className="userImg"
            src={pic.img_url}
            alt={defaultUser.username}
          />
          <h2>{defaultUser.username}</h2>
        </div>
        <div className="info">
          <div>
            <strong>About:</strong>
            <br />
            {defaultUser.about}
          </div>
          <div>
            <strong>Skills:</strong>
            <br />
            {defaultUser.skills}
          </div>
        </div>
      </div>
      <div className="portfolio">
        <h3>Portfolio:</h3>
        <div className="projects">
          {portfolio.map(port => (
            <div className="port">
              {/* <h4>Project {port.id}:</h4> */}
              <img
                className="portImg"
                src={pics.find(image => image.img_id === `${port.id}`).img_url}
                alt={port.id}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="posts-section">
        <h3>Posts:</h3>
        <div className="posts">
          {posts.map(post => (
            <div className="post">
              <h4>{post.title} post</h4>
              <img
                className="postImg"
                src={pics.find(image => image.img_id === `${post.id}`).img_url}
                alt={post.id}
              />
              <div className="description">
                <p>
                  <strong>Description:</strong>
                  <br />
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
