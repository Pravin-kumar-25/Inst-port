import React from 'react'
import Loading from '@/components/Loading';
import useLoading from '@/utils/customHook/useLoading';
import nookies from 'nookies'
import { useRouter } from 'next/router';
import { Avatar, Box, Card, Fade, List, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { checkUser } from '@/utils/commonUtils';
import Link from 'next/link';
import nProgress, { NProgress } from 'nprogress';
import { useEffect } from 'react';
import { Suspense } from 'react';

const ProfileLayout = ({ user, children }) => {
    const listOfMenu = [
        {
            title: 'Profile'
        },
        {
            title: 'Friends'
        },
        {
            title: 'Settings'
        }
    ]
    const router = useRouter()
    const path = router.pathname

    let selectedIndex = listOfMenu.findIndex((obj) => {
        let currentPath = path.replace('/profile', '');
        if (currentPath === '') return true;
        return currentPath.includes(obj.title.toLowerCase())
    })

    const [isLoading, setIsLoading] = useLoading()
    const [listSelected, setIsListSelected] = useState(selectedIndex)

    const onListClick = (e, index) => {
        setIsListSelected(index)
    }

    const renderMenu = () => {
        return listOfMenu.map(({ title }, index) => {
            let url = title.toLowerCase() === 'profile' ? '' : title.toLowerCase()
            return (
                <Link href={`/profile/${url}`} key={title}>
                    <ListItemButton selected={index === listSelected}
                        onClick={(e) => onListClick(e, index)}
                    >

                        <ListItemText primary={title} />
                        <KeyboardArrowRightRoundedIcon />

                    </ListItemButton>
                </Link>

            )
        })
    }

    if (isLoading) {
        return <Loading />
    }
    if (!user) {
        router.push('/sign-in')
        return <Loading />
    }

    return (
        <Box sx={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
            justifyContent: 'center',
            height:'90vh'
        }}>
            <Paper sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '300px',

                // paddingTop: '30px'
            }}>
                <Avatar alt='user profile' src='' sx={{ width: '100px', height: '100px', margin: '30px' }} />
                <h2>{user?.name}</h2>
                <nav aria-label='main mailbox folders' style={{ width: '100%' }}>
                    <List>
                        {renderMenu()}
                    </List>
                </nav>
            </Paper>
            <Fade in={true}>
            <Paper
                sx={{
                    width: '600px',
                    padding: '20px',
                    background: 'url("/images/commonBG.jpg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'

                }}>
                <Suspense fallback={<Loading />}>

                    {children}
                </Suspense>

            </Paper>
            </Fade>
        </Box>
    )
}

// export async function getServerSideProps(context) {
//     return await checkUser(context)
// }

export default ProfileLayout