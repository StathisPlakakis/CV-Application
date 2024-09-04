import '../styles/profileImage.css'
import ProfileDialog from './profileDialog'
import { useState, useEffect } from 'react'


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
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setBackgroundImage(base64String);
        localStorage.setItem('backgroundImage', base64String);
      }
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setBackgroundImage(null);
    localStorage.removeItem('backgroundImage');
  }

  useEffect(() => {
    const storedImage = localStorage.getItem('backgroundImage');
    if (storedImage) {
      setBackgroundImage(storedImage);
    }
  }, []);

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
