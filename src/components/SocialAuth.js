import React from 'react'
import styles from '@/styles/Signin.module.css'
import { Facebook, GitHub, Google } from '@mui/icons-material';
import { Divider } from '@mui/material';
import MuiLink from './MuiLink';
import Link from 'next/link';

const SocialAuth = ({ signUp, signIn }) => {
    return (
        <>
            {/* <div className={styles.socialMessage}> */}
            <Divider flexItem color='red' ><h5>Login with social accounts</h5></Divider>
            {/* </div> */}
            <div className={styles.socialButtons}>
                <Google />
                <GitHub />
                <Facebook />
            </div>
            {signUp ? <h5>Already have an account?<MuiLink component={Link} href='/sign-in' >Sign In</MuiLink></h5> : null}
            {signIn ? <h5>Don't have an account?<MuiLink  component={Link} href='/sign-up' >Sign up</MuiLink></h5> : null}
        </>
    )
}

export default SocialAuth