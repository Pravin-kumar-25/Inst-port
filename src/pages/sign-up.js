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
import { useForm } from 'react-hook-form'
import { emailRules, nameRules, passwordRules } from '@/utils/inputRules'


const signup = () => {
    const router = useRouter()
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

    const onSignUp = (data) => {
        // event.preventDefault();
        console.log(data)
    }

    return (
        <Paper elevation={4} sx={{
            width: "40%",
            borderRadius: '20px'
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
                    <Typography variant='h5' component='h5' className={maconda.className}>SIGN UP</Typography>
                </div>
                <StandardInput control={control} name="name" label='Name' helperText={errors.name?.message} rules={nameRules} error={errors.name ? true : false} />
                <StandardInput control={control} name="email" label='Email' helperText={errors.email?.message} rules={emailRules} error={errors.email ? true : false}/>
                <StandardInput control={control} type='password' name="password" label='Password' helperText={errors.password?.message} rules={passwordRules} error={errors.password ? true : false}/>
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
                    <SecondaryButton variant='outlined'
                        className={maconda.className}
                        onClick={onSignInClick}
                    >
                        Already have an account? Sign in
                    </SecondaryButton>
                    <PrimaryButton variant='contained' className={maconda.className} type='submit' onClick={handleSubmit(onSignUp)} >Sign up</PrimaryButton>

                </div>

            </AuthBox>
        </Paper>
    )
}

export default signup