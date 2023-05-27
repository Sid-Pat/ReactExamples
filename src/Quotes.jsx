import {React,useEffect,useState} from 'react'
import LoadingSpinner from './LoadSpinner';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Loader from './Loader.jsx';

const randomQuoteLink = "https://inspo-quotes-api.herokuapp.com/quotes/random"

function Quotes() {
    const [quote,setQuote] = useState({text:"",author:""});
    const [load,setLoad] = useState(true);

    useEffect(()=>{fetchQuote()}, []); //For only once during loading rendering

    async function fetchQuote(){
        setLoad(true);
        const response = await fetch(randomQuoteLink);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
        setSc(3);
        setLoad(false);
    }


    const [sc,setSc] = useState(3);

  return (
    <>
    <div >
    <div style={{opacity:load?1:0}}>
      <LoadingSpinner />
      <Loader />
    </div>

    
    <div style={{opacity:load?0:1}} className='quotes'>

      <div style={{border:"2px black solid", padding:"10px", display:"grid"}}>
          <h3>{quote.text}</h3>
          <h3>{quote.author}</h3>
      </div>
      <br/>
      <Button variant="contained" onClick={fetchQuote} endIcon={<SendIcon />}>
            Send
      </Button>
    </div>

    <br/>
    <div>
    <Typography component="legend">Rate this quote</Typography>
        <Rating
        name="simple-controlled"
        value={sc}
        onChange={(event, newValue) => {
          setSc(newValue);
        }}
    />

    <p>{sc}/5</p>
    </div>
    </div>
    </>
  )
}

export default Quotes