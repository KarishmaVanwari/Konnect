import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import { useHistory } from 'react-router';
const axios = require('axios')

export default function SignIn() {
  const [uName, setUname] = useState('')
  const [pass, setPass] = useState('')
  const [user, setUser] = useState({})
  // const history=useHistory();

  const submitForm = () => {
    axios.post('http://localhost:5000/login', { email: uName, password: pass }).then(
      (res) => {setUser(res.data[0]);}
    ).then(()=>{
      console.log(user.name);
      // let path = '/main'; 
    // history.push(path);
    })
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => { setUname(e.target.value) }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => { setPass(e.target.value) }}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={submitForm}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
        <a href="/auth/google">Login with Google</a>
        
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Article: {user.article}</p>
        </div>
      </div>
    </Container>
  );
}
