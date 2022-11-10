import './App.css';
import Joke from './Components/Joke'

function App() {
  const jokeOne = {
    setup: 'I got my daughter a fridge for her birthday.',
    punchline: `I can't wait to see her face light up when she opens it.`

  }

  const jokeCollection = [
    { setup: `I got my daughter a fridge for her birthday.`,
    punchline: `I can't wait to see her face light up when she opens it.`},
    {setup: `How did the hacker escape the police?`,
    punchline: `He just ransomware!`},
    {setup: `Why don't pirates travel on mountain roads?`,
    punchline: `Scurvy.`},
    {setup: `Why do bees stay in the hive in the winter?`,
    punchline: `Swarm.`},
    {setup: `What's the best thing about Switzerland?`,
    punchline: `I don't know, but the flag is a big plus!`},
    {setup: ``,
    punchline: `Shut yo mouf!`}

  ]

  const pickedJoke = jokeCollection[Math.floor(Math.random() * 5)]

  return (
    <div className="App">
      <Joke setup={jokeOne.setup} punchline={jokeOne.punchline}/>
      <Joke setup="How did the hacker escape the police?" punchline="He just ransomware!"/>
      <Joke setup={jokeCollection[2].setup} punchline={jokeCollection[2].punchline}/>
      <Joke setup={pickedJoke.setup} punchline={pickedJoke.punchline}/>
      <Joke setup={jokeCollection[5].setup} punchline={jokeCollection[5].punchline}/>
    </div>
  );
}

export default App;
