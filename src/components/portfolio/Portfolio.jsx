import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";

function Portfolio() {
  const list = [
    { id: "featured", title: "Featured " },
    { id: "web", title: "Web App " },
    { id: "mobile ", title: "Mobile App " },
    { id: "design", title: "Design " },
    { id: "branding", title: "Branding " },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
      <li className="active">Featured</li>
        {/* <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li> */}
     {/* {list.map((item)=>(<Portfolio title={item.title}/>))} */}
     {list.map((item)=>(<PortfolioList title={item.title} />))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="images.jpeg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="images.jpeg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="images.jpeg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="images.jpeg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="images.jpeg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="images.jpeg" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
