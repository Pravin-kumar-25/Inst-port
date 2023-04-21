import React from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'
// import useTheme from '@mui/styles'
import { useTheme } from '@mui/material'
import { forwardRef } from 'react'
import { Controller, useForm } from 'react-hook-form'


const StandardInput = (props, refs) => {
    // const classes = useStyles()
    const theme = useTheme()
    // const register = props.register
    return (
        <Controller
            name={props.name}
            control={props.control}
            rules={props.rules}
            render={({ field }) => <TextField {...field} {...props} variant='standard'
                sx={{
                    width: '100%',
                }}

                // className={classes.root}
                color="primary"
            />}
        />

    )
}

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& .MuiInputBase-root': {
//             color: theme.palette.primary.main, 
//           },
//           '& .MuiInput-underline:before': {
//             borderBottomColor: theme.palette.primary.main, 
//           },
//           '& .MuiInput-underline:hover:before': {
//             borderBottomColor: theme.palette.primary.light, 
//           },
//     }
// }))

export default StandardInput