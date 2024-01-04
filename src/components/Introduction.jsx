import TypewriterTitle from "./TypewriterTitle";
import Blurb from "./Blurb";
export default function Introduction(){
    return(
        <div className="introduction-container">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
            
            <TypewriterTitle text = "> Micaiah Vinson" />
            <br/>
            <div className="icons-container">
                <i className="devicon-cplusplus-line-wordmark languagesIcon"></i>  
                <i className="devicon-postgresql-plain languagesIcon"></i>   
                <i className="devicon-sqlite-plain languagesIcon"></i>
                <i className="devicon-bash-plain languagesIcon"></i>
                <i className="devicon-python-plain languagesIcon"></i>
                <i className="devicon-react-original languagesIcon"></i>
                <i className="devicon-mongodb-plain languagesIcon"></i>
            </div>
            <Blurb/>
            
        </div>
    );
}