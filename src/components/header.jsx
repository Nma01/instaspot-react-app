import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
      <div className="logo">
        <img src="/images/Logo-1.svg" alt="logo" />
      </div>
      <Profile />
      {/* <CardContainer /> */}
      <hr />
    </>
  );
}

export default Header;

function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="profile">
        <img src="/images/Avatar.png" alt="Avatar" width={80} />
        <div class="profile_text">
          <h1 class="profile_name">
            Aliaune Damala Bouga Time Bongo Puru Nacka Lu Lu Lu Badara Akon...
          </h1>
          <p class="profile_bio">
            Known mononymously as Akon (/ˈeɪkɒn/), is a Senegalese-American
            singer, record producer, and entrepreneur. An influential figure in
            modern world...
          </p>
          <button className="edit-profile btn2">
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
  );
}

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
