import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import ProjectShow from "../components/ProjectShow";

export default function Project4() {

  return (
    <main>
      <Mouse />
       <section className="project">
         <Navigation />
         <Logo />
         <ProjectShow projectNumber={3}/>
         <Buttons right={"/kontakt"} left={"/projekt-3"} />
         
       </section>
    </main>
  )
}