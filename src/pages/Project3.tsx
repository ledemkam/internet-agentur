import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import ProjectShow from "../components/ProjectShow";

export default function Project3() {

  return (
    <main>
      <Mouse />
       <section className="project">
         <Navigation />
         <Logo />
         <ProjectShow projectNumber={2}/>
         <Buttons right={"/projekt-4"} left={"/projekt-2"} />
         
       </section>
    </main>
  )
}