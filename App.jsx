import { useEffect, useState, useMemo} from "react";
import "./App.css";
import "./components/Trivia"
import Trivia from "./components/Trivia.jsx"
import "./components/Timer"
import Timer from "./components/Timer.jsx"
import "./components/Start"
import Start from "./components/Start.jsx"
import logo from "./assets/rocketvid.gif";
console.log(logo);

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop,setStop] = useState(false);
  const [earned, setEarned] = useState("0 miles");

  const data = [
    {id:1,
    question: "What is the largest planet?",
  answers: [
    {
      text: "Jupiter",
      correct: true,
    },
    {
      text: "Saturn",
      correct: false,
    },
    { 
      text: "Earth",
      correct: false, 
    },
    { 
      text: "Uranus",
      correct: false, 
    },
    ],
   },
   {id:2,
    question: "How many moons does Mars have?",
  answers: [
    {
      text: "One",
      correct: false,
    },
    {
      text: "Two",
      correct: true,
    },
    { 
      text: "Three",
      correct: false, 
    },
    {
      text: "None",
      correct: false,
    },
  ],
},
    {id:3,
      question: "Who was the first person to step on the moon?",
    answers: [
      {
        text: "Edwin Aldrin",
        correct: false,
      },
      {
        text: "Buzz Lightyear",
        correct: false,
      },
      { 
        text: "Neil Armstrong",
        correct: true, 
      },
      {
        text: "Michael Collins",
        correct: false,
      },
    ],
   },
   {id:4,
    question: "What is the smallest planet?",
  answers: [
    {
      text: "Mercury",
      correct: true,
    },
    {
      text: "Mars",
      correct: false,
    },
    { 
      text: "Venus",
      correct: false, 
    },
    {
      text: "Pluto",
      correct: false,
    },
  ],
 },
 {id:5,
  question: "Which planet has the most rings?",
answers: [
  {
    text: "Jupiter",
    correct: false,
  },
  {
    text: "Saturn",
    correct: true,
  },
  { 
    text: "Uranus",
    correct: false, 
  },
  {
    text: "Neptune",
    correct: false,
  },
],
},
{id:6,
  question: "What is the coldest planet?",
answers: [
  {
    text: "Venus",
    correct: false,
  },
  {
    text: "Mars",
    correct: false,
  },
  { 
    text: "Neptune",
    correct: false, 
  },
  {
    text: "Uranus",
    correct: true,
  },
],
},
{id:7,
  question: "What is the hottest planet?",
answers: [
  {
    text: "Venus",
    correct: true,
  },
  {
    text: "Jupiter",
    correct: false,
  },
  { 
    text: "Mercury",
    correct: false, 
  },
  {
    text: "Mars",
    correct: false,
  },
],
},
{id:8,
  question: "Which planet has only one moon?",
answers: [
  {
    text: "Venus",
    correct: false,
  },
  {
    text: "Mars",
    correct: false,
  },
  { 
    text: "Earth",
    correct: true, 
  },
  {
    text: "Neptune",
    correct: false,
  },
],
},
{id:9,
  question: "Which planet revolves around the sun the fastest?",
answers: [
  {
    text: "Mercury",
    correct: true,
  },
  {
    text: "Jupiter",
    correct: false,
  },
  { 
    text: "Venus",
    correct: false, 
  },
  {
    text: "Pluto",
    correct: false,
  },
],
},
{id:10,
  question: "What does NASA stand for?",
answers: [
  {
    text: "National Aerospace and Spaceflight Administration",
    correct: false,
  },
  {
    text: "National Aeronautics and Space Agency",
    correct: false,
  },
  { 
    text: "National Aeronautics and Space Administration",
    correct: true, 
  },
  {
    text: "National Aerospace and Spaceflight Agency",
    correct: false,
  },
],
},
  ];
  const levelPyramid = useMemo(()=>
    [
      {id:1, amount: "23,890 miles"},
      {id:2, amount: "47,780 miles"},
      {id:3, amount: "71,670 miles"},
      {id:4, amount: "95,560 miles"},
      {id:5, amount: "119,450 miles"},
      {id:6, amount: "143,340 miles"},
      {id:7, amount: "167,230 miles"},
      {id:8, amount: "191,120 miles"},
      {id:9, amount: "215,010 miles"},
      {id:10, amount: "238,900 miles"}
    ].reverse(),
    []); 

  useEffect(()=>{
    questionNumber >1 && 
    setEarned(levelPyramid.find(m=> m.id === questionNumber-1).amount);
  }, [levelPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? ( 
        <>
      <div className="rocket">
        {stop ? (
         <>
       <div className="rockVid"><img src={logo} height = {788} width = {700} alt="loading.."/></div>
       </>
       ) : ( 
    <>
       <div className="topRocket">
       </div>
       <div className="bottomRocket">  
         </div>
         </>
       )}

     </div>
     <div className="main">
       {stop ? (
         <>
       <h1 className="endText">You reached {earned} on your way to the moon!</h1>  
       </>
       ) : ( 
    <>
       <div className="topMain">
         <div className="timerMain"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
       </div>
       <div className="bottomMain">
         <Trivia 
         data={data} 
         setStop={setStop} 
         questionNumber={questionNumber}
         setQuestionNumber={setQuestionNumber}
         />
         </div>
         </>
       )}
       </div>
     <div className="pyramid">
      <ul className="levelList">
        {levelPyramid.map((m) => (
          <li className={questionNumber === m.id ? "levelListItem active" : "levelListItem"}>
            <span className="levelListItemNumber">{m.id}</span>
            <span className="levelListItemAmount">{m.amount}</span>
          </li>
        ))}
      </ul>
    </div>
        </>
      ) : ( <Start setUsername={setUsername}/>
      )}
    </div>
  );
}

export default App;
