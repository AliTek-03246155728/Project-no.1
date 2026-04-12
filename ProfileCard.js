import React from 'react';

function ProfileCard({ name, bio, avatar, isFollowed, onFollow }) {
  return (
    <div className="card">
      <img src={avatar} alt={name} style={{ width: '100px', borderRadius: '50%' }} />
      <h3>{name}</h3>
      <p>{bio}</p>
      <button onClick={onFollow} className={isFollowed ? "unfollow-btn" : "follow-btn"}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default ProfileCard;