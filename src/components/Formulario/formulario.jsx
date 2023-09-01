import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'

function Formulario(props) {
  return (
    <Container component="main" maxWidth="xs">
    
    <Box
    sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}
    >
        <Typography component="span" variant='h4'>
           {props.titulo}
        </Typography>
        <Box component="form" sx={{mt: 1 ,}}>
            <TextField fullWidth margin='normal' label="Email" name='email' variant='filled' required></TextField>
            <TextField fullWidth margin='normal' label="senha" type='password' variant='filled' required></TextField>
            <FormControlLabel
            control={<Checkbox value="remember" color='primary'/>}
            label="lembrar-me"
            />
            <Button fullWidth type='submit' variant='contained' sx={{mt: 4 ,mb: 4}}>login</Button>
            <Grid container>
                <Grid item xs>
                    <Link href='a'>esqueci a senha</Link>
                </Grid>
                <Grid item>
                    <Link href='a'>cadastre-se</Link>
                </Grid>
            </Grid>
        </Box>
    </Box>
    </Container>
  )
}

export default Formulario