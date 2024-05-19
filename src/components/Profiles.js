import React, { useState } from 'react';
import axios from 'axios';
import { AiFillStar, AiFillHeart } from 'react-icons/ai'; // Importing icons from react-icons
import './Profiles.css'; // Import CSS file for styling

const Profiles = ({ item, isEven, userId, setProfiles }) => {
  const [liked, setLiked] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleLike = async (selectedUserId) => {
    try {
      setLiked(true);
      await axios.post("http://192.168.1.5:4000/send-like", {
        currentUserId: userId,
        selectedUserId: selectedUserId,
      });

      setTimeout(() => {
        setProfiles((prevProfiles) =>
          prevProfiles.filter((profile) => profile._id !== selectedUserId)
        );
        setLiked(false);
      }, 200);
    } catch (error) {
      console.log("Error liking profile", error);
    }
  };

  const handleLikeOther = async (selectedUserId) => {
    try {
      setSelected(true);
      await axios.post("http://192.168.1.5:4000/send-like", {
        currentUserId: userId,
        selectedUserId: selectedUserId,
      });

      setTimeout(() => {
        setProfiles((prevProfiles) =>
          prevProfiles.filter((profile) => profile._id !== selectedUserId)
        );
        setSelected(false);
      }, 200);
    } catch (error) {
      console.log("Error liking profile", error);
    }
  };

  return (
    <center>
    <div className={`profile-container ${isEven ? 'even' : 'odd'}`}>
      <div className="profile-details">
        <h2>{item?.name}</h2>
        <p>Description: {item?.description}</p>
      </div>
      <div className="profile-images">
        {item?.projectImages?.slice(0, 1).map((image, index) => (
          <img key={index} src={image} alt="Profile" />
        ))}
      </div>
      <div className="profile-actions">
       
        <div className="like-buttons">
          <button
            onClick={handleLike}
            className={`star-button ${liked ? 'liked' : ''}`}
            disabled={liked}
          >
            {/* <AiFillStar /> */}
          </button>
          <button
            onClick={() => handleLikeOther(item?._id)}
            className={`heart-button ${selected ? 'selected' : ''}`}
            disabled={selected}
          >
            <AiFillHeart />
          </button>
        </div>
      </div>
    </div>
    </center>
  );
};

export default Profiles;
