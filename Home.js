import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homeTitle">
        <h1>Welcome to the Unity Culture Festival</h1>
      </div>
      <div className="homeBody1">
        <h3>Want to Explore the Cultures of the World?</h3>
        <h5>Learn more about the citizens of various countries by visiting the <Link to="/ex">Exibition Hall</Link>.</h5>
      </div>
      <div className="homeBody2">
        <h3>Want to Test your Cultural Knowledge?</h3>
        <h5>Visit the trivia page to see how much you know about cultures around the world and maybe learn something new.</h5>
      </div>
      <div className="homeBody1">
        <h3>Eager to Try New Cuisines?</h3>
        <h5>Eat to your heart's content by trying new foods in the food court.</h5>
      </div>
      <div className="homeBody2">
        <h3>Make the World a Better Place</h3>
        <h5>Contribute to various humanitarian causes around the world in the fundraiser page.</h5>
      </div>
    </>
  );
}
 
export default Home;
