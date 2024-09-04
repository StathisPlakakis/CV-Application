import '../styles/saved.css'

function Saved({ isSaveActivated }) {

  return (
    <>
      {isSaveActivated ? <div className="hasSaved">Saved</div> : null}
    </>
  )
}

export default Saved