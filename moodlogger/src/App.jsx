import styles from "./App.module.css"

import Header from './Header/Header.jsx'
import MoodEntry from './components/MoodEntry.jsx';


function App() {

    return(
        <>
        <div className={styles.App}>
            <Header/>
        </div>
        </>
    );

}

export default App
