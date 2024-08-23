import '../styles/profileImage.css'
import ProfileDialog from './profileDialog'
import { useState } from 'react'


function Profile() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <section className="profile">
        <div className="profileImg" onClick={openDialog}>
        </div>
        <ProfileDialog isOpen={isDialogOpen} onClose={closeDialog}/>
      </section>
    </>
  )
}

export default Profile
