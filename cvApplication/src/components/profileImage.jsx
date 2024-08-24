import '../styles/profileImage.css'
import ProfileDialog from './profileDialog'
import { useState } from 'react'


function Profile() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
    }
  };

  const handleImageDelete = () => {
    setBackgroundImage(null);
  }


  return (
    <>
      <section className="profile">
        <div 
          className="profileImg" 
          onClick={openDialog}
          style={
            {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          }
        >
        </div>
        <ProfileDialog 
          isOpen={isDialogOpen} 
          onClose={closeDialog}
          onAdd={handleImageChange}
          onDelete={handleImageDelete}
          backgroundImage={backgroundImage}
        />
      </section>
    </>
  )
}

export default Profile
