import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    localStorage.setItem('token', 'fake-token')
    navigate('/dashboard')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component='form'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          maxWidth: '400px',
          p: 4,
          boxShadow: 3,
          borderRadius: 1,
          backgroundColor: 'background.paper',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label='Username'
          variant='outlined'
          fullWidth
          value={username}
          onChange={e => setUsername(e.target.value)}
          className='mb-4'
        />
        <TextField
          label='Password'
          type='password'
          variant='outlined'
          fullWidth
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='mb-4'
        />
        <Button
          type='submit'
          variant='contained'
          sx={{
            backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            color: 'white',
          }}
          className='w-full mt-4'
        >
          Login
        </Button>
      </Box>
    </Box>
  )
}

export default Login
