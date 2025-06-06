import { useState } from 'react';

function Modal({ profileData, onSave, onClose }) {
  const [name, setName] = useState(profileData.name);
  const [bio, setBio] = useState(profileData.bio);
  const [file, setFile] = useState(profileData.image);

  const handleSave = (e) => {
    e.preventDefault();
    onSave({
      name,
      bio,
      image: file,
    });
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Profile</h2>
        <form action="" onSubmit={handleSave}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="fileUpload">Profile Image</label>
            <input
              type="file"
              id="fileUpload"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <button type="submit">Save Changes</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
