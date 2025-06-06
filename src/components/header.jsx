import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faPencil } from '@fortawesome/free-solid-svg-icons';

function Header({ openModal, profileData }) {
  return (
    <>
      <div className="logo">
        <img src="/images/Logo-1.svg" alt="logo" />
      </div>
      <Profile openModal={openModal} profileData={profileData} />
      <hr />
    </>
  );
}

export default Header;

// Profile Componenet
function Profile({ openModal, profileData }) {
  const { name, bio, image } = profileData;
  return (
    <>
      <div className="profile-wrapper">
        <div className="profile">
          <img
            src={image ? URL.createObjectURL(image) : '/images/Avatar.png'}
            alt="Avatar"
            width={80}
          />
          <div className="profile_text">
            <h1 className="profile_name">
              {name || "Aliaune Damala Bouga Time Bongo Puru Nacka Lu Lu Lu Badara Akon..."}
            </h1>
            <p className="profile_bio">
              {bio || `Known mononymously as Akon (/ˈeɪkɒn/), is a Senegalese-American
              singer, record producer, and entrepreneur. An influential figure
              in modern world...`}
            </p>
            <button onClick={openModal} className="edit-profile btn2">
              <p>
                <span className="pencil-icon">
                  <FontAwesomeIcon icon={faPencil} />
                </span>
                <span> Edit Profile</span>
              </p>
            </button>
          </div>
        </div>
        <Button />
      </div>
    </>
  );
}

// Button component
function Button() {
  return (
    <>
      <button className="btn">
        <img
          className="plus-icon"
          src="/images/Group 26.svg"
          alt="new post button"
        />
        <span className="btn-text">New Post</span>
      </button>
    </>
  );
}
