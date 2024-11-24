import Buttons from "../components/Buttons"
import DynamicText from "../components/DynamicText"
import Mouse from "../components/Mouse"
import Navigation from "../components/Navigation"
import SocialNetwork from "../components/SocialNetwork"

export default function Home() {
  return (
    <>
    <div className="home">
      <Mouse />
      <Navigation />
      <SocialNetwork />
      <div className="home-main">
        <div className="main-content">
          <h1>FS AGENCY</h1>
          <h2><DynamicText/></h2>
        </div>
      </div>
      <Buttons right={"/projekt-1"} left={""}/>
    </div>
    </>
  )
}