import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_Key = "fc7a7f5ede2afbfe63acdd9ef66161af";

  let getWeatherInfo = async () => {
    try {
      let responce = await fetch(
        `${API_URL}?q=${city}&appid=${API_Key}&units=metric`
      );
      let jsonResponce = await responce.json();

      let result = {
        city: city,
        temp: jsonResponce.main.temp,
        tempMin: jsonResponce.main.temp_min,
        tempMax: jsonResponce.main.temp_max,
        humidity: jsonResponce.main.humidity,
        feelsLike: jsonResponce.main.feels_like,
        weather: jsonResponce.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let inputHandler = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          value={city}
          label="City Name"
          variant="outlined"
          onChange={inputHandler}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>no such place exist!!!</p>}
      </form>
    </div>
  );
}
