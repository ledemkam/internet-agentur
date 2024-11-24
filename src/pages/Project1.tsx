import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import ProjectShow from "../components/ProjectShow";

export default function Project1() {

  return (
    <main>
      <Mouse />
       <section className="project">
         <Navigation />
         <Logo />
         <ProjectShow projectNumber={0}/>
         <Buttons right={"/projekt-2"} left={"/"} />
         
       </section>
    </main>
  )
}