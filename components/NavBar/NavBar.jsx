import Image from "next/image"
import icon from "../../images/icon.png"
import styles from "./NavBar.module.css"

export default function NavBar(){
    return(
        <div className={styles.navContainer}>
            <Image src={icon} alt="Icon"/>
        </div>
    )
}