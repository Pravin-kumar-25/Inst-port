import { Button } from '@mui/material'
import { signOut } from 'next-auth/react'
import React from 'react'
import { useState } from 'react'
import ButtonLoader from './ButtonLoader'

const LogoutButton = () => {
    const [logOutLoading, setLogOutLoading] = useState(false)
    const onClick = async () => {
        setLogOutLoading(true)
        try {
            await signOut()

        } catch (err) {
            setLogOutLoading(false)

        }
    }
    return (
        <Button sx={{ width: '100px', height: '35px' }} variant='outlined' onClick={onClick}>
            {logOutLoading ? <ButtonLoader /> : 'Logout'}

        </Button>
    )
}

export default LogoutButton