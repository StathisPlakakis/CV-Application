import '../styles/generalInfo.css'
import InfoDialog from './generalInfoDialog'

function Info() {
  return (
    <section className="info">
      <div className="infoHead">
        <h2>Info</h2>
        <button       className="editInfo">
        </button>
      </div>
      <InfoDialog/>
    </section>
  )
}

export default Info