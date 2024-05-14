/* eslint-disable react/no-unescaped-entities */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from 'react'
export default function Benefits() {
  const [question, setQuestion] = useState({});
  const [count, setCount] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
 
  const questions = [
    {
      question: "Which of the following is the benefit of nuclear energy? ",
      choices: ["A.  Low Greenhouse Gas Emissions",
                "B.  High Energy Density",
                "C.  Reliable Power Supply",
                "D.  All of the above "],
      answer: "D.  All of the above ",
    },
    {
      question: "  Reduced Air pollution is an advantage of nuclear energy?",
      choices: [
        "A. True",
        "B. False",
        
      ],
      answer: "A. True",
    },
    {
      question: "Which of the following is the misconception of nuclear energy?",
      choices: [
        "A.  Base load power",
        "B.  Technological advancement",
        "C.  Health risk",
        "D.  Job creation and economic growth "
      ],
      answer: "C.  Health risk",
    },
    {
      question: "Decarbonization is a misconception of nuclear energy.",
      choices: ["A. True", "B. False"],
      answer: "B. False",
    },
    {
      question:
        "Nuclear energy is a sustainable energy source. ",
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
  return (
    <main>
      <Box
        sx={{
          margin: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 25,
              md: 50,
            },
          }}
          textAlign="center"
        >
          Benefits and misconceptions of nuclear energy
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: 20,
              md: 40,
            },
          }}
          marginTop={5}
          textAlign="center"
        >
          Benefits
        </Typography>
        <Typography
          sx={{
            px: {
              md: "2.5rem",
              xs: "1.7rem",
            },
            lineHeight: 1.7,
          }}
        >
          <p>
            Although there are differing views on this subject, nuclear energy
            has a big impact on how we will use energy in the future. Despite
            concerns, its advantages are undeniable. Nuclear energy has several
            advantages that are worth investigating, including a low carbon
            footprint and dependable power. We'll go into these benefits in this
            talk, emphasizing how nuclear energy may help with the world's
            energy problems. Some basic advantages include
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>
              Low Greenhouse Gas Emissions:
            </span>
            Nuclear power plants produce very low levels of greenhouse gas
            emissions compared to fossil fuel-based power plants, contributing
            to mitigating climate change.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>High Energy Density:</span>
            Nuclear fuel provides a very high energy density, meaning a small
            amount of fuel can generate a large amount of energy, making it
            efficient and cost-effective.
          </p>
          Abenezer m, [5/14/2024 4:53 AM]
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>Reliable Power Supply:</span>
            Nuclear power plants can operate continuously for long periods,
            providing a stable and reliable source of electricity, which is
            crucial for meeting baseload electricity demand.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>Energy Security: </span>
            Nuclear energy reduces dependence on imported fossil fuels,
            enhancing energy security for countries with limited domestic energy
            resources.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              Long-Term Fuel Availability:{" "}
            </span>
            Uranium, the primary fuel for nuclear reactors, is relatively
            abundant and has a longer projected supply compared to fossil fuels
            like oil and natural gas.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>Reduced Air Pollution:</span>
            Nuclear power plants do not emit air pollutants such as sulfur
            dioxide, nitrogen oxides, or particulate matter, which can have
            significant health and environmental impacts.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>Base Load Power: </span>
            Nuclear power plants can provide base load electricity, meaning they
            can consistently generate a large amount of electricity, helping to
            meet the continuous demand for power.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>
              Technological Advancement:
            </span>
            Nuclear technology continues to evolve, with advancements in reactor
            design, safety systems, and waste management techniques, making it
            increasingly safer and more efficient.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              Abenezer m, [5/14/2024 4:53 AM] Job Creation and Economic Growth:
            </span>
            The nuclear industry creates jobs across various sectors, including
            construction, operations, and research, contributing to economic
            growth and development.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>Decarbonization:</span>
            Nuclear energy plays a role in decarbonizing the energy sector by
            providing a low-carbon alternative to fossil fuels, helping to meet
            emission reduction targets and combat climate change.
          </p>
        </Typography>
        <Typography variant="h3" textAlign="center">
          Misconceptions about nuclear energy
        </Typography>
        <Typography
          sx={{
            px: "2.5rem",
            lineHeight: 1.7,
          }}
        >
          <p>
            False beliefs about nuclear energy frequently obscure its possible
            advantages, resulting in divisive opinions and misinterpretations.
            Although waste management and safety concerns are commonly raised,
            these beliefs frequently ignore technological developments and
            strict regulatory procedures. We can better grasp the facts and
            difficulties of nuclear energy by looking more closely at these
            myths. We'll dispel popular myths in this investigation,
            illuminating the complexity of nuclear power and its place in the
            modern energy system.
          </p>
          <p>The several misconceptions about nuclear energy include:</p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>Safety Concerns:</span> One of
            the most common misconceptions is that nuclear power plants are
            inherently unsafe and prone to catastrophic accidents like Chernobyl
            or Fukushima. While these incidents have occurred, modern nuclear
            reactors have multiple safety features and stringent regulations to
            prevent such disasters.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>Radioactive Waste:</span>
            Another misconception is that nuclear energy produces an
            unmanageable amount of radioactive waste that remains hazardous for
            thousands of years. While nuclear waste is generated, modern waste
            management techniques, such as reprocessing and deep geological
            disposal, can effectively contain and minimize its impact on the
            environment.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>Nuclear Proliferation:</span>
            There is a misconception that nuclear energy contributes to nuclear
            proliferation by providing access to materials that can be used to
            build nuclear weapons. However, most countries with nuclear power
            programs have strict safeguards and non-proliferation agreements in
            place to prevent the diversion of nuclear materials for weapons
            purposes.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>High Costs:</span>
            Some believe that nuclear energy is prohibitively expensive compared
            to other forms of energy generation. While nuclear power plants have
            high upfront capital costs, their long-term operational costs can be
            competitive, especially when considering factors like fuel
            availability and price stability.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>Limited Availability:</span>
            There's a misconception that nuclear energy is not scalable or
            suitable for widespread adoption due to limited fuel resources or
            geographic constraints. However, advances in reactor technology,
            fuel recycling, and international cooperation can help expand
            Abenezer m, [5/14/2024 4:53 AM] nuclear energy's role in the global
            energy mix.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>
              Renewable Energy Replacement:
            </span>
            Some argue that nuclear energy is unnecessary because renewable
            energy sources like solar and wind can fully replace it. While
            renewables are essential for a sustainable energy future, they have
            limitations such as intermittency and energy storage challenges that
            nuclear power can complement by providing reliable baseload
            electricity.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}>Health Risks: </span>
            There's a misconception that living near a nuclear power plant
            increases the risk of cancer and other health problems due to
            radiation exposure. However, numerous studies have found that
            radiation doses from nuclear facilities are well below regulatory
            limits and do not pose significant health risks to the surrounding
            population.
          </p>
          <p style={{ padding: 15 }}>
            <span style={{ fontWeight: "bold" }}> Slow Innovation:</span>
            Some believe that nuclear energy technology is stagnant and lacks
            innovation compared to other energy sectors. However, ongoing
            research and development efforts in advanced reactor designs, fuel
            cycle technologies, and safety systems demonstrate ongoing
            innovation in the nuclear industry. It is essential to dispel these
            myths with factual information in order to have educated
            conversations regarding nuclear energy's place in the shift to
            low-carbon, sustainable energy sources.
          </p>
        </Typography>
      </Box>
      <div>
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
                  textAlign: "center",
                }}
              >
                {question.question}
              </Typography>
              <ul>
                {question.choices?.map((choice) => (
                  <li
                    style={{ listStyle: "none", padding: "10px" }}
                    key={choice}
                  >
                    <Button
                      sx={{
                        marginLeft: {
                          xs: 3,
                          md: 20,
                        },
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
                <Typography textAlign="center">
                  {isCorrect ? "Correct!" : "Incorrect. Please try again."}
                </Typography>
              )}
              {!quizEnded && (
                <Button
                  sx={{
                    marginLeft: {
                      xs: 10,
                      md: 30,
                    },
                    color: "white",
                    backgroundColor: "teal",
                    ":hover": {
                      backgroundColor: "green",
                      top: 2,
                    },
                    left: 5,
                  }}
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
                      marginLeft: {
                        xs: 10,
                        md: 30,
                      },
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
      </div>
    </main>
  );
}