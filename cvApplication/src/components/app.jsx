import Profile from "./profileImage";
import Saved from "./saved";
import Info from "./generalInfo";
import About from "./about";
import { useState } from "react";

function App() {

  const [isSaveActivated, setIsSaveActivated] = useState(false)

  const handleSaveActive = () => {
    setIsSaveActivated(true)
  }

  const handleSaveDisactive = () => {
    setIsSaveActivated(false)
  }
  return (<>
    <Profile/>
    <Info
      onSavedActive={handleSaveActive}
      onSavedDisactive={handleSaveDisactive}
    />
    <About
    />
    <Saved
      isSaveActivated={isSaveActivated}
    />
  </>)
  
}

export default App