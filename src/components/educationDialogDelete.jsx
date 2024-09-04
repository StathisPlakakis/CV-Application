import { useRef, useEffect } from "react"
import '../styles/educationDialog.css'


function EducationDialogDelete({
  isDeleteDialogOpen,
  onClose,
  onDelete,
  id
}) {

  const dialogRef = useRef(null);

  const handleDelete = () => {
    onClose();
    onDelete(id);
  }

  useEffect(() => {
    if (isDeleteDialogOpen) {
      dialogRef.current.showModal()
    }else {
      dialogRef.current.close()
    }
  }, [isDeleteDialogOpen])
  return (
    <dialog ref={dialogRef}>
      <div className='educationDialHead'>
        <h2>Delete education</h2>
        <button onClick={onClose}></button>
      </div>
      <div className='delDialActions'>
        <button 
          className="cancel"
          onClick={onClose}
        >
          Cancel
        </button>
        <button 
          className="delete"
          onClick={handleDelete}
          style={{
            color: 'red'
          }}
        >
          Delete
        </button>
      </div>
    </dialog>
  )
}

export default EducationDialogDelete;