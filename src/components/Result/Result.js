import React from "react";
import "./Result.css";

const Result = props => {
  const {
    error,
    date,
    city,
    temp,
    sunrise,
    sunset,
    pressure,
    wind
  } = props.weather;
  return (
    <div className="Result">
      <div>Pogoda dla miasta: {city}</div>
      <div>
        Temperatura dla miasta: {city} wynosi: {temp}
      </div>
      <div>
        Wschód Słońcca dla miasta: {city} jest o: {sunrise}
      </div>
      <div>
        Zachód Słońca dla miasta: {city} jest o: {sunset}
      </div>
      <div>
        Ciśnienie dla miasta: {city} wynosi: {pressure}
      </div>
      <div>
        Wiatr dla miasta: {city} wynosi: {wind}
      </div>
      <div>Dane z dnia: {date}</div>
    </div>
  );
};

export default Result;
