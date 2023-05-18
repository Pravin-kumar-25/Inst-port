import { Comment, Favorite, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const PostCard = ({data}) => {
  return (
    <Card
        sx={{
            width:'500px;',
        }}
    >
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: red[500] }}>P</Avatar>
            }
            title='Pravin'
            subheader='November 25,1999'
        />
        <CardMedia
            component='img'
            height='300'
            alt='posts'
            image='/images/commonBG.jpg'

        />
        <CardContent>
            This is about post
        </CardContent>
        <CardActions>
            <IconButton>
                <Favorite />
            </IconButton>
            <IconButton>
                <Comment />
            </IconButton>
            <IconButton>
                <Share />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default PostCard