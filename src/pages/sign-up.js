import AuthBox from '@/components/AuthBox'
import StandardInput from '@/components/StandardInput'
import { maconda } from '@/utils/fonts'
import { Paper, Typography } from '@mui/material'
import React from 'react'
import styles from '@/styles/Signin.module.css'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import { useRouter } from 'next/router'
import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';

const signup = () => {
    const router = useRouter()
    const onSignInClick = () => {
        router.push('/sign-in')
    }

    return (
        <Paper elevation={4} sx={{
            width: "40%",
            borderRadius: '20px'
        }}
        >
            <AuthBox
                component="form"
                noValidate
                autoComplete="off"
            >
                <div className='titleWithIcon'>
                    <LockPersonRoundedIcon color='primary' />
                    <Typography variant='h5' component='h5' className={maconda.className}>SIGN UP</Typography>
                </div>
                <StandardInput label='Name'/>
                <StandardInput label='Email'/>
                <StandardInput label='Password'/>
                <StandardInput label='Confirm Password'/>
                <div className={styles.authButtons}>
                    <SecondaryButton variant='outlined'
               className={maconda.className}
                    onClick={onSignInClick}
                    >
                        Already have an account? Sign in
                    </SecondaryButton>
                    <PrimaryButton variant='contained' className={maconda.className}>Sign up</PrimaryButton>

                </div>
            </AuthBox>
        </Paper>
    )
}

export default signup