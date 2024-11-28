import Buttons from "../components/Buttons"
import DynamicText from "../components/DynamicText"
import Mouse from "../components/Mouse"
import Navigation from "../components/Navigation"
import SocialNetwork from "../components/SocialNetwork"
import { motion } from "framer-motion"

export default function Home() {
  const variants = {
    initial: {
      opacity: 0,
      transition: 
       { duration: 0.5},
        x: 100,  
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      },
      x: -100
    }
  }
  return (
    
    <div className="home">
      <Mouse />
      <Navigation />
      <SocialNetwork />
      <motion.div 
          initial="initial"
          animate="visible"
          exit="exit"
          variants={variants}
          className="home-main">
        <div className="main-content">
          <motion.h1 
             drag 
             dragConstraints={{
            top: -200,
            left: -250,
            right: 950,
            bottom: 250
          }}>FS AGENCY</motion.h1>
          <motion.h2
                drag 
                dragConstraints={{
               top: -200,
               left: -250,
               right: 950,
               bottom: 250
             }}>
            <DynamicText/>
          </motion.h2>
        </div>
      </motion.div>
      <Buttons right={"/projekt-1"} left={""}/>
    </div>
    
  )
}