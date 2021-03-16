import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
              {/*  <NavLink to={"/profile"} className={`${classes.item} ${classes.active}`} activeClassName={classes.active} >Profile</NavLink>
*/}
                <NavLink to={"/profile"}  activeClassName={classes.active} >Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/dialogs"}  activeClassName={classes.active} >Messages</NavLink>
            </div>
            <div>
                <a className={classes.item}>News</a>
            </div>
            <div>
                <a className={classes.item}>Music</a>
            </div>
            <div>
                <a className={classes.item}>Settings</a>
            </div>
        </nav>
    )
}
export default NavBar;