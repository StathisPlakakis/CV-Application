import '../styles/profileDialog.css'
import  { useRef, useEffect } from 'react';

function ProfileDialog({isOpen, onClose, onAdd, onDelete, backgroundImage}) {
  const dialogRef = useRef(null);

  const handleAddClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleDeleteClick = () => {
    document.getElementById('fileInput').value = '';
    onDelete();
  }

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef}>
      <div className='profDialHead'>
        <h2>Profile photo</h2>
        <button onClick={onClose}></button>
      </div>
      <div className='profDialImage'>
        <div 
          className='profImg'
          style={
            {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          }
        ></div>
      </div>
      <div className='profDialActions'>
        <div className='addImage'>
          <button onClick={handleAddClick}>
            {backgroundImage === null ? 'Add photo' : 'Change photo'}
          </button>
        </div>
        {
          backgroundImage === null ? 
                              null :
                              <div className='deleteImage'>
                                <button onClick={handleDeleteClick}>Delete</button>          
                              </div>
        }
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={onAdd}
        />
      </div>
    </dialog>
  );
}

export default ProfileDialog
