import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={profile_pic_name
            }
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Timmy Dang</div>
          <div className="brief_description">
            Hi everyone! My name is Timmy Dang and I'm a rising junior studying computer science at MIT. I enjoy going on walks, fencing, and sailing!
          </div>
        </div>
      </div>
    </div>
  
    )
  }
}