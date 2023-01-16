import {Avatar, Button, CssBaseline, TextField, Box, Typography, Container} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { fetchUser } from '../utils/fetchers';
import { useContext, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { LoggedInContext } from "../contexts/LoggedIn"
import CardOfUname from './CardOfUname';


export default function Login() {

    const {setLoggedin} = useContext(LoggedInContext);
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedin(null)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        fetchUser({username: data.get('username')})
            .then((res) => {
                if (Object.keys(res).length) {
                    setLoggedin(res);
                    navigate(-1)
                } else {
                    alert('Incorrect username')
                }
        })
    };

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="username"
              name="username"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <CardOfUname />
      </Container>
  );
}