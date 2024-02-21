import SectionHeader from "../components/SectionHeader";
import PortfolioItem from "../components/PortfolioItem";

export default function Portfolio() {
    return (
      <div id = "portfolio" className = "portfolio-container">
        <SectionHeader>Portfolio</SectionHeader>
        <PortfolioItem/>
        <PortfolioItem/> 
        <PortfolioItem/>
        <PortfolioItem/>
      </div>
    )
  }
  