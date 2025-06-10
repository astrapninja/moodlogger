import styles from "./Header.module.css"
import { getImageUrl } from "../utils";


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

            <nav>
                <ul className={styles.MenuItems}>
                    <li><a href="#">Home</a></li>
                    <li><a href="Journal">Journal</a></li>
                    <li><a href="Settings">Settings</a></li>
                </ul>
            </nav>
        </div>
    );

}

export default Header