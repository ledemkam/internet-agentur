import { NavLink } from "react-router-dom"

type ButtonsProps = {
    right: string,
    left: string
    }

const Buttons = ({right,left}:ButtonsProps) => {
  return (
    <div className="scroll-bottom">
        <NavLink to={left} className="left hover">
              <span>&#10092;</span>
        </NavLink>
        <NavLink to={right} className="right hover">
              <span>&#10093;</span>
        </NavLink>
    </div>
  )
}
export default Buttons