/* eslint-disable react/no-unescaped-entities */
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Ernest from "../images/ErnestRutherford.jpg";
import Fritz from "../images/FritzStrassmann.jpg";
import Marie from "../images/MarieCurie.jpg";
import Otto from "../images/OttoHahn.jpg";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import Image3 from "../images/image3.jpg";
import Image4 from "../images/image4.jpg";
import { useState, useEffect } from "react";
export default function NuclearEnergy() {
  const [question, setQuestion] = useState({});
  const [count, setCount] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const questions = [
    {
      question: "What do we call the division of atoms into several sections?",
      choices: ["A. Fission", "B. Fusion", "C. Explosion", "D. Pension"],
      answer: "A. Fission",
    },
    {
      question: "The first controlled nuclear chain reaction was achieved by:",
      choices: [
        "A. Albert Einstein",
        "B. J. Robert Oppenheimer",
        "C. Werner Heisenberg",
        "D. Enrico Fermi",
      ],
      answer: "D. Enrico Fermi",
    },
    {
      question:
        "Where was the first commercial nuclear power plant constructed?",
      choices: [
        "A. Hague, Netherlands",
        "B. Obninsk, Russia",
        "C. Durban, South Africa",
        "D. New York, USA",
      ],
      answer: "B. Obninsk, Russia",
    },
    {
      question: "Nuclear energy has no benefits.",
      choices: ["A. True", "B. False"],
      answer: "B. False",
    },
    {
      question:
        "The history of nuclear energy is a tale of scientific discovery, geopolitical competition, and technological innovation.",
      choices: ["A. True", "B. False"],
      answer: "A. True",
    },
  ];

  useEffect(() => {
    setQuestion(questions[0]);
  }, []);

  const fetchQuestion = () => {
    setCount(count + 1);
    if (count >= questions.length - 1) {
      setQuizEnded(true);
    }
    const curr_question = questions[count + 1];
    if (curr_question) {
      setQuestion(curr_question);
      setSelectedChoice(null);
      setIsCorrect(false);
    }
  };

  const handleChoiceSelection = (choice) => {
    setSelectedChoice(choice);
    if (choice === question.answer) {
      setIsCorrect(true);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIsCorrect(false);
      setIncorrectAnswers(incorrectAnswers + 1);
    }
  };
  const [indexOfImage, setIndexOfImage] = useState(0);
  function handleBackButton() {
    if (indexOfImage > 0) {
      setIndexOfImage((prev) => prev - 1);
    } else if (indexOfImage === 0) {
      setIndexOfImage(3);
    }
  }
  function handleNextButton() {
    if (indexOfImage < 3) {
      setIndexOfImage((prev) => prev + 1);
    } else if (indexOfImage === 3) {
      setIndexOfImage(0);
    }
  }
  const powerplants = [
    {
      url: Image1,
      alt: "Nuclear power plant",
    },
    {
      url: Image2,
      alt: "Nuclear power plant",
    },
    {
      url: Image3,
      alt: "Nuclear power plant",
    },
    {
      url: Image4,
      alt: "Nuclear power plant",
    },
  ];
  const scientists = [
    {
      url: Ernest,
      name: "Ernest Rutherford",
    },
    {
      url: Fritz,
      name: "Fritz Strassmann",
    },
    {
      url: Marie,
      name: "Maria Curie",
    },
    {
      url: Otto,
      name: "Otto Hahm",
    },
  ];
  return (
    <main>
      <Box
        sx={{
          margin: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 35,
              md: 55,
            },
          }}
          textAlign="center"
        >
          Nuclear Energy
        </Typography>
        <Typography
          sx={{
            px: {
              xs: "20%",
              md: "2.5rem",
            },
            lineHeight: 1.7,
          }}
        >
          <p>
            The energy emitted from an atom's nucleus, which is composed of
            protons and neutrons, is known as nuclear energy. There are two ways
            to generate this energy source: fusion, which occurs when nuclei
            fuse together, or fission, which occurs when atoms divide into
            several sections.
          </p>
          <p>
            The nuclear energy harnessed around the world today to produce
            electricity is through nuclear fission, Nuclear fission is a
            reaction where the nucleus of an atom splits into two or more
            smaller nuclei, while releasing energy. For instance, when hit by a
            neutron, the nucleus of an atom of uranium-235 splits into two
            smaller nuclei, for example a barium nucleus and a krypton nucleus
            and two or three neutrons. These extra neutrons will hit other
            surrounding uranium-235 atoms, which will also split and generate
            additional neutrons in a multiplying effect, thus generating a chain
            reaction in a fraction of a second.
          </p>
          <p>
            Energy is released as heat and radiation each time the reaction
            takes place. In a nuclear power plant, the heat can be transformed
            into electricity in a manner comparable to that of fossil fuels like
            coal, gas, and oil.
          </p>
          <p>
            Nuclear power, a key application of nuclear energy, involves
            harnessing the heat produced by nuclear fission reactions to
            generate electricity. Massive amounts of heat are released during
            controlled nuclear reactions in a nuclear power plant. This heat is
            then used to create steam, which powers turbines that are connected
            to generators to produce electricity. Nuclear power plants have a
            number of benefits, such as high energy density and low greenhouse
            gas emissions. They do, however, also present special difficulties,
            such as managing radioactive waste over the long term and safely
            handling radioactive materials and preventing mishaps like
            meltdowns. Notwithstanding these difficulties, nuclear energy
            continues to play a vital role in the world's energy mix, delivering
            baseload electricity in many nations. Ongoing research and
            development efforts aim to improve the safety, efficiency, and
            sustainability of nuclear power generation for the future.
          </p>
          <Box
            sx={{
              mx: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={powerplants[indexOfImage].url}
              alt={powerplants[indexOfImage].alt}
              style={{ width: 700, height: 500 }}
            />
            <Box alignSelf="center">
              <Button
                sx={{
                  border: "none",
                  alignSelf: "center",
                  width: 100,
                  height: 30,
                  margin: 5,
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "20px",
                  ":hover": {
                    backgroundColor: "darkgray",
                    color: "black",
                  },
                }}
                type="button"
                onClick={handleBackButton}
              >
                {"<"}
              </Button>
              <Button
                sx={{
                  border: "none",
                  alignSelf: "center",
                  width: 100,
                  height: 30,
                  margin: 5,
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "20px",
                  ":hover": {
                    backgroundColor: "darkgray",
                    color: "black",
                  },
                }}
                type="button"
                onClick={handleNextButton}
              >
                {">"}
              </Button>
            </Box>
          </Box>
          The history of nuclear energy is a tale of scientific discovery,
          geopolitical competition, and technological innovation. It began with
          the groundbreaking work of scientists like Marie Curie and Ernest
          Rutherford in the late 19th and early 20th centuries, leading to the
          discovery of nuclear fission by Otto Hahn and Fritz Strassmann in
          1938. This pivotal breakthrough paved the way for the development of
          nuclear reactors and weapons during World War II. The first controlled
          nuclear chain reaction was achieved by Enrico Fermi in 1942 at the
          University of Chicago. Following the war, the focus shifted towards
          harnessing nuclear energy for peaceful purposes, leading to the
          construction of the first commercial nuclear power plant in Obninsk,
          Russia, in 1954. Since then, nuclear energy has become a significant
          source of electricity worldwide, although its expansion has been
          tempered by safety concerns, proliferation risks, and the management
          of radioactive waste.
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: "center",
              justifyContent: "center",
              gap: {
                xs: 2,
                md: 4,
              },
            }}
          >
            {scientists.map((value) => (
              <Box
                key={value.name}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={value.url}
                  alt={value.name}
                  style={{
                    borderRadius: "50%",
                    width: "130px",
                    height: "130px",
                  }}
                />
                <p>{value.name}</p>
              </Box>
            ))}
          </Box>
        </Typography>
      </Box>
      <div className="card">
        <div className="card-content">
          <>
            <Typography
              sx={{
                fontSize: {
                  xs: 25,
                  md: 50,
                },
              }}
              textAlign="center"
            >
              Quiz
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: 25,
                  md: 40,
                },
              }}
            >
              {question.question}
            </Typography>
            <ul>
              {question?.choices?.map((choice) => (
                <li style={{ listStyle: "none", padding: "10px" }} key={choice}>
                  <Button
                    sx={{
                      ":hover": {
                        top: 2,
                      },
                    }}
                    variant="contained"
                    onClick={() => handleChoiceSelection(choice)}
                    disabled={selectedChoice !== null}
                  >
                    {choice}
                  </Button>
                </li>
              ))}
            </ul>
            {selectedChoice && (
              <p>{isCorrect ? "Correct!" : "Incorrect. Please try again."}</p>
            )}
            {!quizEnded && (
              <Button
                sx={{
                  backgroundColor: "teal",
                  ":hover": {
                    backgroundColor: "green",
                    top: 2,
                  },
                  left: 5,
                }}
                variant="contained"
                type="button"
                onClick={fetchQuestion}
              >
                Next
              </Button>
            )}
            {quizEnded && (
              <Typography textAlign="center">
                Quiz ended! You got {correctAnswers} correct and{" "}
                {incorrectAnswers} incorrect.
                <Button
                  sx={{
                    marginLeft: 30,

                    backgroundColor: "teal",
                    color: "white",
                    ":hover": {
                      backgroundColor: "green",
                      top: 2,
                    },
                    left: 5,
                  }}
                  type="button"
                  onClick={() => location.reload()}
                >
                  Restart
                </Button>
              </Typography>
            )}
          </>
        </div>
      </div>
    </main>
  );
}
