import React, {useEffect} from 'react'
import { Button, Container } from '@mui/material'
import { useRouter } from 'next/router'
import PostCard from '@/components/PostCard'
import { useSession } from 'next-auth/react'
import Loading from '@/components/Loading'

const Home = () => {
  // const router = useRouter()

  // const {data: session} = useSession()
  // console.log(session);

  // if(!session) {
  //   return <Loading />
  // }

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