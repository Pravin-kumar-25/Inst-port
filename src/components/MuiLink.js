import { Link } from '@mui/material'
import React from 'react'

const MuiLink = ({ children, ...restProps }, ref) => {
    return (
        <>
        <Link ref={ref} {...restProps} >{children}</Link>
        </>
    )
}

export default React.forwardRef(MuiLink)