import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

export default function Contact() {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: 200
    }
  }
  return (
    <main>
      <Mouse />
        <motion.div 
          className="contact"
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransition}
          transition={{duration: 0.4}}
        >
             <Navigation />
             <Logo />
             <ContactForm />
               <div className="contact-infos">
                  <div className="address">
                    <div className="content">
                      <h4>Adresse</h4>
                      <p>1 Place de la République</p>
                      <p>75011 Nantes</p>
                    </div>
                  </div>
                  <div className="phone">
                    <div className="content">
                      <h4>Telephon</h4>
                      <CopyToClipboard text="0640404040" onCopy={() => alert("telephonNummer kopiert")}>
                      <p>06 40 40 40 40</p>
                      </CopyToClipboard>
                    </div>
                  </div>
                  <div className="email">
                    <div className="content">
                      <h4>Email</h4>
                      <CopyToClipboard text="muater@agenturas.de" onCopy={() => alert("email-adresse kopiert")}>
                      <p>muater@agenturas.de</p>
                      </CopyToClipboard>
                  </div>
                  </div>
                  <SocialNetwork />
                  <div className="credits">
                    <p>&copy; 2024 ledemkam</p>
                  </div>
               </div>
               <Buttons left="/projekt-4" right="/"/>
        </motion.div>
    </main>
  )
}