import React from "react";
import "./UserProfileCard.css"; //css file included
import profileIcon from "../assets/image/my_pic.jpg"; //import images, note that the path need to be specified specifically

const UserProfileCard = () => {
  return (
    <div classname="upc">
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={profileIcon} alt="" />
        <div className="profile-title">Nalin Dalal</div>
        <div className="profile-description">
          I am Nalin Dalal.I am currently a student in B. tech. Programme in 2nd
          year from the department of Computer Science and Engineering.
        </div>
        <div className="profile-button">
          <a href="mailto:nalindalal2004@gmail.com" target="_blank">Mail</a>
        </div>
        <div className="profile-button">
          <a
            href="https://www.linkedin.com/in/nalin-dalal-815617271/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="profile-button">
          <a href="https://twitter.com/nalin82929" target="_blank">Twitter</a>
        </div>
      </div>
    </div>
  );
};
export default UserProfileCard;
