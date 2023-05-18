import React, {useEffect} from 'react'
import { Button, Container } from '@mui/material'
import { useRouter } from 'next/router'
import signin from './sign-in'
import PostCard from '@/components/PostCard'


const Home = () => {
  const router = useRouter()

  // useEffect(() => {
  //   // Always do navigations after the first render
  //   router.push('/sign-in', undefined, { shallow: true })
  // }, [])

  return (
    <Container maxWidth='xl' sx={{
      gap:'20px',
      width:'100%',
      // // height:'100vh',
      flexDirection:'column',
      position: 'relative',
      top:'70px',
      display:'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'center'
      // // overflow:'scroll'
      // // background:'red'
    }}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />

      {/* <PostCard />
      <PostCard />
      <PostCard /> */}

    </Container>
  )
}

export default Home