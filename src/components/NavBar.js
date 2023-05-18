import { logOut } from '@/utils/commonUtils';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useState } from 'react';
import ButtonLoader from './ButtonLoader';

const NavBar = () => {
    const router = useRouter()
    const path = router.pathname
    const [logOutLoading, setLogOutLoading] = useState(false)

    const logout = async () => {
        setLogOutLoading(true)
        await logOut()
        router.push('sign-in')
    }

    useEffect(() => {
        return () => {
            setLogOutLoading(false)
        }
    })

    console.log('inside nava');

    if (path.includes('/sign')) {
        return <></>
    }

    return (
        <AppBar position='fixed'
            sx={{
                backgroundColor: '#0e1447'
            }}
        >
            <Container maxWidth='xl'>
                <Toolbar>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        // href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        INST-port
                    </Typography>
                    <Box sx={{ flexGrow: 2 }}>
                        <Button variant='' onClick={() => router.push('/')}>Home</Button>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: 'flex', gap: '10px' }}>
                        <Button variant='' onClick={() => router.push('/profile')}>Profile</Button>
                        <Button sx={{ width: '100px', height: '35px' }} variant='outlined' onClick={logout}>
                            {logOutLoading ? <ButtonLoader /> : 'Logout'}

                        </Button>
                    </Box>
                </Toolbar>

            </Container>
        </AppBar>
    )
}

export default NavBar