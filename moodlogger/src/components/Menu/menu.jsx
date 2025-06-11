import styles from "./Menu.module.css"
import { getImageUrl } from "../../utils.js";


function Menu(){

    return(
        <div className={styles.sideMenu} id="MenuSidebar">
            <div className={styles.sideMenuBox}>
                <div className={styles.sideMenuTop}>
                    <p>asd</p>
                </div>
                <a href="#">Home</a>
                <a href="Journal">Journal</a>
                <a href="Settings">Settings</a>
            </div>
        </div>
    );

}

export default Menu