import {Link} from "react-router-dom";

const ExHall = () => {
  return (
    <>
      <div className="exTitle">
      <h1>Exibition Hall</h1>
      </div>
      <div className="exClass">
      <h3>Explore a Continent</h3>
      </div>
      <div>
        <Link to="/namerica-s">
          <button type="button">North America</button>
        </Link>
        <Link to="/europe-s">
          <button type="button">Europe</button>
        </Link>
        <Link to="/asia-s">
          <button type="button">Asia</button>
        </Link>
        <Link to="/samerica-s">
          <button type="button">South America</button>
        </Link>
        <Link to="/africa-s">
          <button type="button">Africa</button>
        </Link>
        <Link to="/australia-s">
          <button type="button">Australia</button>
        </Link>
      </div>
    </>
  );
}

export default ExHall;