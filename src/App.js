import { Typography,AppBar,Box, FormControl,MenuItem,Select,InputLabel,Card, CardContent,CardActions, Button, Divider } from '@mui/material'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment,decrement,reset} from './reducers/counterReducer'
function App() {
  const count = useSelector((state)=>state.counter.value)
  const [stepValue,setStep] = useState('')
  const dispatch = useDispatch()

  const setColor = ()=>{
    if(count > 0){
      return "green"
    }
    else if(count < 0){
      return "red"
    }
    else{
      return "text.primary"
    }
    
  }
  const handleChange = (e)=>{
    setStep(e.target.value)
  }
  return (

  <div>
     <Box sx={{ flexGrow: 5 }}>
      <AppBar position="static" >
        
          
          <Typography variant="h4" marginLeft="45%" marginTop="1rem" component="div" sx={{ flexGrow: 1 }}>
            Redux
          </Typography>

      </AppBar>
    </Box>
    <Card sx={{ maxWidth: 330,marginLeft: "auto", marginRight: "auto", marginTop: "100px" }} elevation={15}>

      <CardContent>
        <Typography gutterBottom variant="h4" textAlign="center" component="div">
          Counter App
        </Typography>
        <Divider/>
        <Typography variant="h3" fontWight="bold"  textAlign="center" color={setColor()}>
         {count}
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120,marginLeft:"30%" }}>
        <InputLabel id="step">Step</InputLabel>
        <Select
          labelId="step"
          id="step"
          value={stepValue}
          label="Step"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
      </CardContent>
      <CardActions  >

          <Button sx={{marginLeft: "15%"}} variant='contained' onClick={()=>dispatch(decrement(stepValue==='' ? 1 : stepValue))}>
              <Typography variant='p' fontWeight= "bold">
              -
            </Typography>
          </Button>
          <Button  variant='contained' onClick={()=>dispatch(reset())}>
            <Typography variant='p'>
              Reset
            </Typography>
          </Button>
          <Button  variant='contained' onClick = {()=>dispatch(increment(stepValue==='' ? 1 : stepValue))}>
          <Typography variant='p'  fontWeight= "bold">
              +
            </Typography>
          </Button>
       
      </CardActions>
    </Card>
    </div>
  );
}

export default App;
