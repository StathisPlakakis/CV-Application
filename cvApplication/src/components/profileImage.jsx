import '../styles/profileImage.css'
import { useState } from 'react'


function Profile() {
  const [profileImageDial, setprofileImageDial] = useState(false);

  const handleClickOnProfileImage = () => {
    setprofileImageDial(!profileImageDial);
  }

  return (
    <>
      <section className="profile">
        <div className="profileImg" onClick={handleClickOnProfileImage}>
          
        </div>
      </section>
    </>
  )
}

export default Profile
