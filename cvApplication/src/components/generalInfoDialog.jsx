import { useRef, useEffect } from "react"

function InfoDialog({ isOpen }) {

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
      hi
      {/* <form>

      </form> */}
    </dialog>
  )
}

export default InfoDialog