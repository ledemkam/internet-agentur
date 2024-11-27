import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";

export default function Contact() {
  return (
    <main>
      <Mouse />
        <div className="contact">
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
        </div>
    </main>
  )
}