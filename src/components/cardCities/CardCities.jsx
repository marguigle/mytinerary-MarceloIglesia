import "./cardCities.css";

const CardCities = ({ city }) => {
  return (
    <div className="cities-card">
      <div>
        <img src={city.image} alt="" className="imageCity" />
      </div>
      <h4>{city.cityName}</h4>
      <p>{city.language}</p>
      <p>{city.description}</p>
    </div>
  );
};

export default CardCities;
