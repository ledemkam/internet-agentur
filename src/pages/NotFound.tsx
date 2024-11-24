import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFound">
       <div className="not-found-content">
            <h1>404 Fehler</h1>
            <h2>Seite nicht gefunden</h2>
            <p>Die Seite, die Sie suchen, wurde möglicherweise entfernt, hat einen anderen Namen erhalten oder ist vorübergehend nicht verfügbar.</p>
            <NavLink to="/">
            <h3>
            Zurück zur Startseite <i className="fas fa-home"></i>
            </h3>
            </NavLink>
       </div>
    </div>
  )
}