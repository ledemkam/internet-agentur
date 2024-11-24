import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import ProjectShow from "../components/ProjectShow";

export default function Project2() {

  return (
    <main>
      <Mouse />
       <section className="project">
         <Navigation />
         <Logo />
         <ProjectShow projectNumber={1}/>
         <Buttons right={"/projekt-3"} left={"/projekt-1"} />
         
       </section>
    </main>
  )
}