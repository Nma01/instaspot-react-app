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

      <hr />
      <CardContainer />
      <hr />
      <Footer />
    </>
  );
}

export default Header;

function Profile() {
  return (
    <div className='profile-wrapper'>
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
          <div className="edit-profile">
            <p>
              <span className="pencil-icon">
                <FontAwesomeIcon icon={faPencil} />
              </span>
              <span> Edit Profile</span>
            </p>
          </div>
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

function CardContainer() {
  return (
    <div className="card-container">
      <Card
        name="Val Thorens"
        photoName="/images/pexels-kassandre-pedro-8639743 1-6.png"
        unionIcon="/images/Union.svg"
      />
      <Card
        name="Restaurant terrace"
        photoName="/images/pexels-kassandre-pedro-8639743 1-1.png"
        unionIcon="images/Union.svg"
      />
      <Card
        name="An outdoor cafe"
        photoName="/images/pexels-kassandre-pedro-8639743 1-2.png"
        unionIcon="images/Union.svg"
      />
      <Card
        name="A very long bridge, over the forest..."
        photoName="/images/pexels-kassandre-pedro-8639743 1-3.png"
        unionIcon="images/Union.svg"
      />
      <Card
        name="Tunnel with morning light"
        photoName="/images/pexels-kassandre-pedro-8639743 1-4.png"
        unionIcon="images/Union.svg"
      />
      <Card
        name="Mountain house"
        photoName="/images/pexels-kassandre-pedro-8639743 1-5.png"
        unionIcon="images/Union.svg"
      />
    </div>
  );
}
function Card({ name, photoName, unionIcon }) {
  return (
    <div className="card-wrapper">
      <img className="card-photo" src={photoName} alt="photo" />
      <div className="card-details">
        <p>{name}</p>
        <img className="love-icon" src={unionIcon} alt="love icon" />
      </div>
    </div>
  );
}

function Footer() {
  return <footer>2024 &copy; Spots</footer>;
}
