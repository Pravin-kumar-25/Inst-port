import AuthBox from '@/components/AuthBox'
import StandardInput from '@/components/StandardInput'
import { Fade, Paper, Typography } from '@mui/material'
import React from 'react'
import styles from '@/styles/Signin.module.css'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import { useRouter } from 'next/router'
import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';
import { useForm } from 'react-hook-form'
import { emailRules, nameRules, passwordRules } from '@/utils/inputRules'
import { checkUser, signUp } from '@/utils/commonUtils'
import useLoading from '@/utils/customHook/useLoading'
import Loading from '@/components/Loading'
import SocialAuth from '@/components/SocialAuth'


const signup = ({ user }) => {
    const router = useRouter()
    const [loading, setLoading] = useLoading()

    const onSignInClick = () => {
        router.push('/sign-in')
    }

    const { control, watch, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    const password = watch('password')

    const onSignUp = async (data) => {
        // event.preventDefault();
        const responseData = await signUp({
            name: data.name,
            email: data.email,
            password: data.password
        })
        // nookies.set(null,'userData',responseData, {})
        // localStorage.setItem("token",responseData.token);
        router.push('/profile')
    }

    if (loading) {
        return <Loading />
    }
    if (user) {
        router.push('/profile')
        return <Loading />
    }

    return (
        <Fade in={true}>

            <Paper elevation={4} sx={{
                width: "30%",
                borderRadius: '10px'
            }}
            >
                <AuthBox
                    component="form"
                    // noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit(onSignUp)}
                >

                    <div className='titleWithIcon'>
                        <LockPersonRoundedIcon color='primary' />
                        <Typography variant='h5' component='h5' >SIGN UP</Typography>
                    </div>
                    <StandardInput control={control} name="name" label='Name' helperText={errors.name?.message} rules={nameRules} error={errors.name ? true : false} />
                    <StandardInput control={control} name="email" label='Email' helperText={errors.email?.message} rules={emailRules} error={errors.email ? true : false} />
                    <StandardInput control={control} type='password' name="password" label='Password' helperText={errors.password?.message} rules={passwordRules} error={errors.password ? true : false} />
                    <StandardInput control={control} type='password' name="confirmPassword" label='Confirm Password' helperText={errors.confirmPassword?.message}
                        rules={{
                            required: 'Confirm your Password',
                            validate: (value) => {
                                if (value !== password) {
                                    return 'Password does not match...'
                                }
                                return null
                            }
                        }}
                        error={errors.confirmPassword ? true : false}
                    />


                    <div className={styles.authButtons}>
                        {/* <SecondaryButton variant='outlined'
                        className={maconda.className}
                        onClick={onSignInClick}
                    >
                        Login
                    </SecondaryButton> */}
                        <PrimaryButton variant='contained'  type='submit' onClick={handleSubmit(onSignUp)}
                            sx={{ paddingLeft: '5rem', paddingRight: '5rem' }}
                        >
                            Sign up
                        </PrimaryButton>
                        
                    </div>
                    <SocialAuth signUp />
                </AuthBox>
            </Paper>
        </Fade >
    )
}

export async function getServerSideProps(context) {
    return await checkUser(context)
}

export default signup