import React, {useEffect} from 'react'
import { Button, Container } from '@mui/material'
import { useRouter } from 'next/router'
import signin from './sign-in'


const Home = () => {
  const router = useRouter()

  // useEffect(() => {
  //   // Always do navigations after the first render
  //   router.push('/sign-in', undefined, { shallow: true })
  // }, [])

  return (
    <Container maxWidth='xl' sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      width:'100%',
      height:'100vh',
      // background:'red'
    }}>
      <Button color='primary'>
        hlo
      </Button>
    </Container>
  )
}

export default Home