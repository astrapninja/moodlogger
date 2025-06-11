import styles from "./Header.module.css"
import { getImageUrl } from "../utils.js";

import Menu from "../components/Menu/menu.jsx"


function Header(){

    return(
        <div className={styles.Header}>
            <div>
                <img className={styles.MenuButton}
                src = {getImageUrl("Header/menuIcon.png")}
                alt=""
                />
            </div>
            <div className={styles.HeaderTitle}>
                <p>Mood Logger</p>
            </div>
        </div>
    );

}

export default Header