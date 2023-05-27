import './App.css'

import Button from '@mui/material/Button';

import DiceGame from './DiceGame'
import DieRoll from './DieRoll'
import Greeter from './Greeter'
import Header from './Header'
import ListPicker from './ListPicker'
import ColorList from './ColorList'
import GambleGame from './GambleGame'
import Learn from './Learn'
import Hotel from './Hotel'
import Clicker from './Clicker'
import Form from './Form'
import Counter from './Counter'
import Toggler from './Toggler'
import ToggleCounter from './ToggleCounter'
import ColorBox from './ColorBox'
import ColorGrid from './ColorGrid'
import MultiCounter from './MultiCounter'
import ScoreKeeper from './ScoreKeeper'
import LearnAlpha from './LearnAlpha'
import ScoreGame from './ScoreGame'
import ParaGlitter from './ParaGlitter'
import UserName from './UserName'
import SignupForm from './SignupForm'
import BetterSignupForm from './BetterSignupForm'
import ShoppingListForm from './ShoppingListForm'
import ShoppingList from './ShoppingList'
import EffectCounter from './EffectCounter'
import Quotes from './Quotes'
import FormDemo from './FormDemo';

const data = [
  {id:1, item:"JS", star:4.5 , completed:true},
  {id:2, item:"React", star:4.0 , completed:false},
  {id:3, item:"DBMS", star:4.5 , completed:true},
  {id:4, item:"OOPS", star:5.0 , completed:true},
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {

  return (
  <div>
    <Quotes />
  </div>
  )
}

export default App
