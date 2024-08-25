import { useRef, useEffect } from "react"

function InfoDialog({ isOpen, onClose }) {

  const dialogRef = useRef(null)

  useEffect( () => {
    if(isOpen) {
      dialogRef.current.showModal();
    }else {
      dialogRef.current.close();
    }
  })

  return (
    <dialog ref={dialogRef}>
      <div className='infoDialHead'>
        <h2>Profile photo</h2>
        <button onClick={onClose}></button>
      </div>
      {/* <form>

      </form> */}
    </dialog>
  )
}

export default InfoDialog