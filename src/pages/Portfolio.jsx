import SectionHeader from "../components/SectionHeader";
import PortfolioItem from "../components/PortfolioItem";
//images import
import i1 from "../assets/images/iQuHack.webp";
import i2 from "../assets/images/MAPAST2.jpg"
import i3 from "../assets/images/cpphut.png";

export default function Portfolio() {
    const portfolioItemObjects = [
      {
        title: "MIT + iQuHack 2021 Quantum Hackathon Project",
        link: "https://github.com/MicaiahHtml/2021_Qeystone",
        img: i1
      },
      {
        title: "MAPAST - Global News In One Place",
        link: "https://github.com/MicaiahHtml/MAPAST",
        img: i2
      },
      {
        title: "CPPHUT - A FullStack Script Sharing Website",
        link: "https://github.com/MicaiahHtml/PerScholas2023_CPPHUT",
        img: i3
      }
    ];
    const portfolioItems = portfolioItemObjects.map((item, i)=> {
      return(<PortfolioItem key = {i} title = {item.title} link = {item.link} img = {item.img} />)
    });

    
    return (
      <div id = "portfolio" className = "portfolio-container">
        <SectionHeader>Portfolio</SectionHeader>
        <div style = {{justifyContent: 'center', display: 'grid'}}>
          {portfolioItems}
        </div>
      </div>
    )
  }
  