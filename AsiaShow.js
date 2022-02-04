import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const AsiaShow = () => {
  const asiaData =[
    {
      countryName: "China",
      demographics: "88% are Native Spaniards",
      culture: "5 meal system",
      food: "eat lots of pasta (non)"
    },
    {
      countryName: "India",
      demographics: "90% are Germans",
      culture: "no meal system",
      food: "dismal"
    },
    {
      countryName: "Turkey",
      demographics: "99% are Viking",
      culture: "700 meal system",
      food: "eat english noble guts"
    }
  ];

  const ArrowLeft = (props) => (
    <button {...props} className="arrowButton"/>
  );
  const ArrowRight = (props) => (
    <button {...props} className="arrowButton"/>
  );

  const settings = {
    dots: true,
    fade: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
    prevArrow: <ArrowLeft/>,
    nextArrow: <ArrowRight/>
  }

  return (
    <Slider {...settings}>
      {asiaData.map((data) => {
        return(
          <div className="outer">
            <div>
              <h3>{data.countryName}</h3>
            </div>
            <div>
              <p>{data.demographics}</p>
            </div>
            <div>
              <p>{data.culture}</p>
            </div>
            <div>
              <p>{data.food}</p>
            </div>
          </div>
        )
      })}
    </Slider>
  );
}
 
export default AsiaShow;