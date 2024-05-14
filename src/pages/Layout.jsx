import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import Footer from "./Footer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function Layout() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#EFE7E7",
          display: "flex",
          gap: {
            xs:"1rem",
            md:"2rem"},
          alignItems: {
            xs: "left",
            md: "center",
          },
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Link to="/">
          <img
            src="https://s3-alpha-sig.figma.com/img/42e0/3843/754b5c12edabee160770d9aaf5454d9b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lGY6a-EErU-qTHneHhcuReAWOlTWANSene1gUJqxk3VceuITX8WnQ81oqrVAVnPi~JXp7JsDSBZTiDD3TKj8YaDgmOXrgExBn4yv~CW6umdubrZmc21VOLps8EU0nDBtgpP2uLjsVYEX7QMSqI-lY1AsxGg11B-7Xe6woZz4HmMdtHi~FnJuzHUQUaj9lT-M1nuXBvSSwdkZX41vswIc~J1oT0WO~D7Q9d1yv0MMDf~ioujir72g9RGS0RJcnZHmt3qaB7Cm7dKhxVKIrOnZfVeX6~Vnh97FOp-Vp16QHBBHYeeooCzfjpXPOZoIRM5pIZhG6tT80sXx1-~TqLQvOA__"
            alt="An atom with nucleus at its center with electron orbiting around its shells"
          />
        </Link>
        <Typography
          sx={{
            fontSize: {
              xs: "1.2em",
              md: "1.7em",
            },
          }}
        >
          <Link to="nuclear">Nuclear Energy</Link>
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "1.2em",
              md: "1.7em",
            },
          }}
        >
          <Link to="benefits">Benefits and misconceptions</Link>
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "1.2em",
              md: "1.7em",
            },
          }}
        >
          <Link to="nuclear-in-ethiopia">Nuclear energy in Africa </Link>
        </Typography>
      </Box>
      <Outlet />
      <Footer />
    </>
  );
}
