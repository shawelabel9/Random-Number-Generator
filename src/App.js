import {Container} from '@mui/material'
import {useState} from 'react'

function App() {
 
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [result,setResult] = useState()

  const randomize = () => {
    setResult(Math.floor(Number(min)+Math.random()*(max-min)+1))
  }      
  
  return (
    <div>
      <Container maxWidth='sm'  >
        <h5>Min</h5>
        <input type='text' onChange= {(e)=> setMin(e.target.value)}/>
        <h5>Max</h5>
        <input type='text' onChange= {(e)=> setMax(e.target.value)}/><br/><br/>
        <button onClick={randomize}>Generate Number</button>
        <h3>{result}</h3>
      </Container>
    </div>
  );
}

export default App;
