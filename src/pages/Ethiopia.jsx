/* eslint-disable react/no-unescaped-entities */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Boron from '../images/Boron.jpg';
import Graphite from '../images/Graphite.jpg';
import Uranium from '../images/Uranium235.jpg';
import Zirconium from '../images/Zirconium.jpg';
import { useState, useEffect } from 'react'
import Button from "@mui/material/Button";
export default function NuclearInEthiopia() {
  const [question, setQuestion] = useState({});
  const [count, setCount] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
 
  const questions = [
    {
      question: "The only commercial Nuclear power station in Africa is located in ",
      choices: ["A. Niger", "B. South Africa", "C. Ethiopia", "D. Zambia"],
      answer: "B. South Africa",
    },
    {
      question: "Which component is a component of a nuclear reactor?",
      choices: [
        "A. Uranium",
        "B. zirconium",
        "C. graphite",
        "D. all"
        
      ],
      answer: "D. all",
    },
    {
      question: "Ethiopia has significant potential minerals used in nuclear power plants particularly uranium?",
      choices: [
        "A. True",
        "B. False",
        
      ],
      answer: "A. True",
    },
    {
      question: "Ethiopia hopes to use Nuclear energy to wage war Against the world",
      choices: ["A. True", "B. False"],
      answer: "B. False",
    },
    {
      question:
        "Uranium deposits in Ethiopia are primarly found in ",
      choices: ["A. Afar and Tigray", 
                "B. Addis Ababa and Bahirdar",
                "C. Aramba abd Kobo",
                "D. Harar and Dire Dawa"
              ],
      answer: "A. Afar and Tigray",
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
    const elements = [
        {
        url:Boron,
        name:"Boron"
    },
        {
        url:Graphite,
        name:"Graphite"
    },
        {
        url:Uranium,
        name:"Uranium"
    },
        {
        url:Zirconium,
        name:"Zirconium"
    },
]
    return (
      <main>
        <Box margin={2}>
          <Typography
            sx={{
              fontSize: {
                xs: 35,
                md: 55,
              },
            }}
            textAlign="center"
            margin={2}
          >
            {" "}
            Nuclear energy in Africa specifically Ethiopia
          </Typography>
          <Typography
            sx={{
              px: "2.5rem",
              lineHeight: 1.7,
            }}
          >
            <p>
              As African nations look to diversify their energy sources to meet
              rising demand and address issues with electricity access, nuclear
              energy is a subject of significant attention and discussion across
              the continent. To augment their energy portfolios, a number of
              African countries, notably Ghana, Nigeria, Egypt, South Africa,
              Ethiopia, and Nigeria, have indicated interest in or are actively
              exploring nuclear power plants. The only commercial nuclear power
              station on the continent, Koeberg Nuclear Power Station, is
              specifically located in South Africa and has been producing
              electricity since the 1980s. In addition to its ability to supply
              dependable, low-carbon electricity, nuclear energy has the
              potential to promote technical advancement, industrialization, and
              improved energy security in Africa. Widespread adoption is still
              hampered by issues with safety, expense, nuclear proliferation,
              and radioactive waste disposal. The future of nuclear energy on
              the African continent will be significantly shaped by
              collaborations with international organizations and funding for
              capacity-building projects as these nations manage these
              difficulties.
            </p>
            <p>
              For construction and operation, nuclear power plants need a
              variety of minerals and materials. Primarily, uranium-235 is
              utilized in fuel pellets. Additional necessary components are
              boron for neutron absorption, heavy water for cooling, graphite as
              a moderator, zirconium for cladding, and rare earth elements for
              turbine generators. These elements serve as the cornerstone for
              the safe and effective generation of nuclear energy, together with
              steel and concrete. And Africa is rich with these minerals. Which
              can be a great source of income if the people can use their
              resources efficiently sustainably.
            </p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
                gap: 2,
              }}
            >
              {elements.map((value) => (
                <Box
                  sx={{
                    display: "flex",

                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={value.name}
                >
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "130px",
                      height: "130px",
                    }}
                    src={value.url}
                    alt={value.name}
                  />
                  <p>{value.name}</p>
                </Box>
              ))}
            </Box>
            <p>
              Ethiopia's nuclear power program is part of its vision to become a
              middle-income country by 2025 and to achieve sustainable
              development goals. The country hopes to use nuclear energy to
              address its energy challenges, such as power shortages, high
              costs, and environmental impacts.
            </p>
            <p>
              Ethiopia is turning more and more to nuclear energy to meet its
              rising energy needs and support its economic growth. Ethiopia
              views nuclear energy as a viable option for producing electricity
              sustainably, given its aspirational goals to diversify its energy
              sources and lessen its dependency on hydropower. The nation has
              started a nuclear development path, with an emphasis on developing
              international collaborations, creating regulatory frameworks, and
              strengthening institutional capacity. Ethiopia's nuclear
              aspirations are further fueled by the fact that its enormous
              uranium resources provide a home supply of fuel for future nuclear
              reactors. Ethiopia's venture into nuclear energy, albeit still in
              its infancy, highlights the country's dedication to using clean,
              dependable power to propel development and satisfy the demands of
              its expanding populace.
            </p>
            <p>
              Ethiopia has significant potential for minerals used in nuclear
              power plants, particularly uranium. Exploration efforts in
              Ethiopia have identified promising uranium deposits, indicating
              the presence of resources suitable for nuclear fuel production.
              Additionally, Ethiopia possesses other minerals such as zirconium,
              graphite, and rare earth elements, which are essential for various
              components in nuclear reactors. While commercial-scale mining and
              utilization of these minerals for nuclear power have yet to be
              fully realized, Ethiopia's mineral wealth presents opportunities
              for future development and potential contributions to the global
              nuclear energy sector. Uranium deposits in Ethiopia are primarily
              found in the northern regions of the country, particularly in the
              Afar and Tigray regions. Exploration activities have identified
              several areas with significant uranium potential, including the
              Dallol area in the Afar region and the Werri area in the Tigray
              region. These regions are characterized by geological formations
              conducive to the formation of uranium deposits, such as
              sedimentary basins and volcanic terrains. However, it's important
              to note that while uranium exploration has shown promise,
              commercial-scale mining operations have yet to be established, and
              further assessments are needed to determine the feasibility and
              viability of extracting uranium in Ethiopia.
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
                  }}
                  textAlign="center"
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
                            xs: 5,
                            md: 30,
                          },
                          ":hover": {
                            top: 2,
                          },
                        }}
                        variant="contained"
                        type="button"
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