import React from 'react'
import AuthBox from '@/components/AuthBox'
import styles from '@/styles/Signin.module.css'
import { Fade, IconButton, InputAdornment, Paper, Typography } from '@mui/material'
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
import { useForm } from 'react-hook-form'
import { emailRules, signInPasswordRules } from '@/utils/inputRules'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { checkUser, signIn } from '@/utils/commonUtils'
import Loading from '@/components/Loading'
import useLoading from '@/utils/customHook/useLoading'

const signin = ({ user }) => {
  const theme = useTheme()
  const router = useRouter()

  const [loading, setLoading] = useLoading()


  const [showPassword, setShowPassword] = useState(false)

  const { control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSignIn = async (data) => {
    console.log(data)
    await signIn({
      emailId: data.email,
      password: data.password
    })
  }

  const onSignUpClick = (event) => {
    event.preventDefault()
    console.log(event)
    router.push('/sign-up')
  }

  if (loading) {
    return <Loading />
  }
  if (user) {
    router.push('/profile')
    return <Loading />
  }

  return (
    <>
      <Fade in={true}>

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
            onSubmit={handleSubmit(onSignIn)}
          >
            <div className='titleWithIcon'>
              <LockPersonRoundedIcon color='primary' />
              <Typography variant='h5' component='h5' className={maconda.className}>SIGN IN</Typography>
            </div>
            <StandardInput control={control} name='email' label="Email" helperText={errors.email?.message} rules={emailRules} />
            <StandardInput control={control} name='password' label="Password" helperText={errors.password?.message} rules={signInPasswordRules}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment:
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
              }}
            />
            <div className={styles.authButtons}>
              <SecondaryButton variant='outlined'
                className={maconda.className}
                onClick={onSignUpClick}
              >
                Sign up
              </SecondaryButton>
              <PrimaryButton variant='contained' type="submit">Sign in</PrimaryButton>

            </div>

          </AuthBox>
        </Paper>
      </Fade>

    </>
  )
}

export async function getServerSideProps(context) {
  return await checkUser(context)
}

export default signin