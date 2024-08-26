import { useEffect, useRef } from "react";

function AboutDialog({isDialogOpen}) {

  const dialogRef = useRef(null);

  useEffect(() => {
    if (isDialogOpen) {
      dialogRef.current.showModal();
    }else {
      dialogRef.current.close();
    }
  })

  return (
    <dialog ref={dialogRef}>
      <div className='aboutDialHead'>
        <h2>Edit about</h2>
        <button></button>
      </div>
      <form className="aboutForm">

      </form>
    </dialog>
  )
}

export default AboutDialog;