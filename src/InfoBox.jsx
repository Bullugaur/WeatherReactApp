import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?b=1&s=170667a&w=0&k=20&c=6d9Ap76jcPGKJu_tKJCubVvKYXc1-0Jo5Kr3WyFjJ3Q=";

  const HOT_URL =
    "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI=";
  const COLD_URL =
    "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAINY_URL =
    "https://media.istockphoto.com/id/1049365996/photo/rain-fall-on-the-ground.webp?b=1&s=170667a&w=0&k=20&c=7FTx-rhM7GhxLxsIqxhyjEJ-SdGdxD4td8Bwm3RpY-g=";
  return (
    <div className="InfoBox">
      <div className="cardCantainer">
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temprature ={info.temp}&deg;C</p>
              <p>Humidity ={info.humidity}</p>
              <p>Min Temp ={info.tempMin}&deg;C</p>
              <p>Max Temp ={info.tempMax}&deg;C</p>
              <p>
                The weather can be describe as <i> {info.weather}</i> and feels
                Like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
