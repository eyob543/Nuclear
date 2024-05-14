import Typography from "@mui/material/Typography";
import "./footer.css";
import Box from "@mui/material/Box";
import Icons from "../Icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        bottom: 0,
        marginTop: "auto",
      }}
    >
      <Typography>Contact us</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <img
          className="hazard"
          src="https://s3-alpha-sig.figma.com/img/51a7/decf/d08ffb3544f9156b9f60efb2b524c657?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S9Lkpg3w16YrfdvSEhBSY7lwKNzE4j7aTTln-PRI7RVrN~f~Ri3kTbfeO3LcRK9hdrc-ooH6EoTm9hJmdBe2vNGh5LZat3zhH3qhZfx-iidn5MOmfviSzhJ2she~D83UvvHop6jKQzH4G5eEoRZZviAMYXXLp662TtHrK53ZtJoPLasRelh6viT2nwyCCZwHYuMmEh64ziYv6VqZ9rR-X2vgVvaKzeDqkSq8xkJTSOKa0B6WFX78i6XwdHBlJYxl0RsdHe6uy~dzQhqnaJKwvReT5IJUy6-8-7Iw9YekQvINoVxK~QjeJ6MRrQ7bSfk7WIJJ1AksTASkeHyq9yDfrg__"
          alt=""
          style={{ display: "inline-block" }}
        />
        <Icons />
        <Typography
          sx={{
            fontSize: 18,
            color: "blue",
            textDecoration: "underline",
          }}
        >
          <Link to="/layout/suggestions">Suggestions?</Link>
        </Typography>
      </Box>
    </footer>
  );
}
