import React from 'react'
import AuthBox from '@/components/AuthBox'
import styles from '@/styles/Signin.module.css'
import { Paper, Typography } from '@mui/material'
import StandardInput from '@/components/StandardInput'
import LockIcon from '@mui/icons-material/Lock';
import FormControl from '@mui/material'
import useFormControl from '@mui/material'
import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';
import { useTheme } from '@mui/styles'
import PrimaryButton from '@/components/PrimaryButton'
import { maconda } from '@/utils/fonts'
import SecondaryButton from '@/components/SecondaryButton'
import { useRouter } from 'next/router'

const signin = () => {
  const theme = useTheme()
  const router = useRouter()

  const onSignUpClick = (event) => {
    event.preventDefault()
    console.log(event)
    router.push('/sign-up')
  }

  return (
    <>
      <Paper elevation={4} sx={{
        width: '30%',
        borderRadius: '20px',
        // background: theme.palette.secondary.light
      }}
        className={maconda.className}
      >
        <AuthBox
          component="form"
          noValidate
          autoComplete="off"
        >
          <div className='titleWithIcon'>
            <LockPersonRoundedIcon color='primary' />
            <Typography variant='h5' component='h5' className={maconda.className}>SIGN IN</Typography>
          </div>
          <StandardInput label='Email' />
          <StandardInput label='Password' />
          <div className={styles.authButtons}>
            <PrimaryButton variant='contained'>Sign in</PrimaryButton>
              <SecondaryButton variant='outlined'
               className={maconda.className}
                onClick={onSignUpClick}
              >Sign up
              </SecondaryButton>
          </div>

        </AuthBox>
      </Paper>
    </>

  )
}

export default signin