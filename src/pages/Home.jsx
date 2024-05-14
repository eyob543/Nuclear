import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Footer from "./Footer";
export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src="https://s3-alpha-sig.figma.com/img/42e0/3843/754b5c12edabee160770d9aaf5454d9b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lGY6a-EErU-qTHneHhcuReAWOlTWANSene1gUJqxk3VceuITX8WnQ81oqrVAVnPi~JXp7JsDSBZTiDD3TKj8YaDgmOXrgExBn4yv~CW6umdubrZmc21VOLps8EU0nDBtgpP2uLjsVYEX7QMSqI-lY1AsxGg11B-7Xe6woZz4HmMdtHi~FnJuzHUQUaj9lT-M1nuXBvSSwdkZX41vswIc~J1oT0WO~D7Q9d1yv0MMDf~ioujir72g9RGS0RJcnZHmt3qaB7Cm7dKhxVKIrOnZfVeX6~Vnh97FOp-Vp16QHBBHYeeooCzfjpXPOZoIRM5pIZhG6tT80sXx1-~TqLQvOA__"
        alt="Atom"
      />
      <Typography
        sx={{
          color: "#4200FF",
          fontSize: "3rem",
        }}
      >
        Isotope Nexus
      </Typography>

      <Typography
        sx={{
          fontSize: "1rem",
        }}
      >
        Did you know that nuclear energy can generate electricity without
        producing greenhouse gas emissions? <br /> Discover the incredible
        potential of this eco-friendly technology today!
      </Typography>
      <Typography variant="h5" margin={2}>Learn more here</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: "2.5rem",
        }}
      >
        <Link to="/layout/nuclear">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#D9D9D9",
              justifyContent: "center",
              height: 253,
              width: 150,
              px: "2.5em",
              ":hover": {
                backgroundColor: "#e9e9e9",
              },
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/3c7f/880d/5c5e172ef2f663c457e6e046757368ad?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hMQ6c2nVjKATbtjzxvR5Cq6u9gfERKewSy5D237kAU4DnIsHV-R2ZZvXnqky6~UKum44pny5rlmD1YRQjM-SyJRACF-G8bnkO14uxN66GKzPmERfZ~PvwJtuLRFPPwDNvplOc4ZGbZH9GFIqub-LOgHDBRcJ6cdfg5biOQbh4dKVV1HewimII2hcAuDaNa7Ok~zwqEBqtVvhM-kGc-GqR0uLhq9qtwuKEvLfAIaU7zxl6u08Wh1VHvXUFhTF1nhedDLlj4Q3ECQg5p4ajL5qFj210gjVh1dfCEw0rC~6bHPCmkCYHSPU9dC7yjsndgqnbwDAy-LNZpgHF-mrrgJL4Q__"
              alt=""
            />

            <Typography
              sx={{
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <p> Nuclear energy</p>
            </Typography>
          </Box>
        </Link>
        <Link to="/layout/benefits">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#D9D9D9",
              padding: "1em",
              height: 220,
              width: 190,
              justifyContent: "center",
              ":hover": {
                backgroundColor: "#e9e9e9",
              },
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/192e/8bdb/1b9f026d8bebaff096f05f748f4bfedf?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fs7sfg3SSjsz8npwnweroqA1MjLdfFKy3o0ySOpS4n5PuHGImxdxG38lW5-9THhXEjzGLVnfEsvW0pesxhpXnOPY1VWXOz92jZsx8BGHEMQ2iPlGzuTigG~Sj~3Q2L2ptaVh5U~z0wSk1n6dze1AsWKFTy-Cy4N1k2yJ4bSf72RXXIyUTJRTVtRBqVDIPKioKVFb7Gd~zBRZq9BEWyUFkM2jWLuG96CjbZ~F1y2ZJR0a3L32xkYRY~wiGminQsuFzcwdEEazny5mvhlafuXnzYPey~I5sbnXAZhweAjuqKwlY7R8pzXL9stNXKxrkI9uVW~xiCefjTtwY0~rGe1NgQ__"
              alt=""
            />

            <Typography
              sx={{
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <p>Benefits and misconceptions</p>
            </Typography>
          </Box>
        </Link>
        <Link to="/layout/nuclear-in-ethiopia">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#D9D9D9",
              justifyContent: "center",
              padding: "1.1em",
              height: 216,
              width: 190,
              ":hover": {
                backgroundColor: "#e9e9e9",
              },
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/b315/809d/0f4b94b63f57782bbda0098362847e3a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aohBIrJi4FpIZaMPkfdFTE08aKNoI7O2Dq-iUT8G8rqmpP~gnpvG5hQ0B-3ngrJsN1eoEZ234p-xsrG3GnjVh-q5EMH4DfbhBeI0xm7Avp0uz57HV558wXgn6066KTaSFFWEizP4qgag0HikoNXsBK1I56r3ECDD2jkddPx4n~oNLFd10C69NRl27jgw3B2AL0~FSzl4o4aMFTrW02hELU15dala7QUtqqUVpse6948vYFOSsLeNHvsF0NUZCTEo8KjLna~lYw7K976C7sw07G5uzNHtAWQ6ZvCVyzg4iUOTRQeRlw~sKL-XuDA3~OSffOCjRSyCBTn-zjogfTsm0A__"
              alt=""
            />

            <Typography
              sx={{
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <p>Nuclear energy in Ethiopia</p>
            </Typography>
          </Box>
        </Link>
      </Box>
      <Outlet />
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}
