import styles from './PortfolioItemStylesheet.module.css';
//props.title props.link props.img
export default function PortfolioItem(props){
    return(
        <>
            <div className = {styles.portfolioItemContainer}>
                <a href = {props.link}>{props.title}</a>
                <img src = {props.img}/>
            </div>
        </>
    )
}