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

  let content = null;

  if (!error && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div>
        <div>{`Pogoda dla miasta: ${city}`}</div>
        <div>{`Temperatura dla miasta: ${city} wynosi: ${temp}`}</div>
        <div>{`Wschód Słońca jest o: ${sunriseTime}`}</div>
        <div>{`Zachód Słońca jest o: ${sunsetTime}`}</div>
        <div>{`Ciśnienie wynosi: ${pressure}`}</div>
        <div>{`Wiatr: wynosi: ${wind}`}</div>
        <div>{`Dane z dnia: ${date}`}</div>
      </div>
    );
  }
  return (
    <div className="Result">{error ? `nie mamy w bazie ${city}` : content}</div>
  );
};

export default Result;
