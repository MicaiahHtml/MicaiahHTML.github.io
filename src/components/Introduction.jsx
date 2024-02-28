import TypewriterTitle from "./TypewriterTitle";
import Blurb from "./Blurb";
import styles from "./Introduction.module.css";

export default function Introduction(){
    return(
        <div className={styles.introductionContainer}>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
            
            <TypewriterTitle className = {styles.typewriterText} text = "> Micaiah Vinson" />
            <br/>
            <div className={styles.iconsContainer}>
                <i className={"devicon-cplusplus-line-wordmark " + styles.languagesIcon}></i>  
                <i className={"devicon-postgresql-plain " + styles.languagesIcon}></i>   
                <i className={"devicon-sqlite-plain " + styles.languagesIcon}></i>
                {/* <div id = {styles.mobileIconBreak}> <br/></div> */}
                <i className={"devicon-bash-plain " + styles.languagesIcon}></i>
                <i className={"devicon-python-plain " + styles.languagesIcon}></i>
                <i className={"devicon-react-original " + styles.languagesIcon}></i>
                <i className={"devicon-mongodb-plain " + styles.languagesIcon}></i>
            </div>
            <Blurb/>
            
        </div>
    );
}