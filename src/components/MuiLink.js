import { Link } from '@mui/material'
import React from 'react'

const MuiLink = ({ children, ...restProps }) => {
    return (
        <Link {...restProps} >{children}</Link>
    )
}

export default MuiLink