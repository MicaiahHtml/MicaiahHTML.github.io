export default function SectionHeader(props){
    return(
        <h1 
        className="section-header-container" 
        style = {{
            fontFamily: 'Quicksand'
            //, color: "#F2FF54"
        }}>{props.children}</h1>
    )
}