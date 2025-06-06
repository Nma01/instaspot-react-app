import { useState } from 'react'
import Header from './components/header'
import Footer from "./components/footer"
import CardContainer from './components/cards'
import Modal from './components/modal';
function App() {
  const [showModal, setShowModal] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    bio: '',
    image: null,
  });
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const updateProfile = (newData) => {
    setProfileData(newData);
    closeModal();
  };
  return (
    <>
      <Header openModal={openModal} profileData={profileData} />
      <CardContainer />
      <hr />
      <Footer />
      {showModal && (
        <Modal
          profileData={profileData}
          onSave={updateProfile}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default App
