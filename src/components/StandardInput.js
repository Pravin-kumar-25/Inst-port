import React from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'
// import useTheme from '@mui/styles'
import { useTheme } from '@mui/material'

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

const StandardInput = ({ label }) => {
    // const classes = useStyles()
    const theme = useTheme()

    return (
        <TextField label={label} variant='standard' 
            sx={{
                width:'100%',
            }}
            // className={classes.root}
            color="primary"
        />
    )
}

export default StandardInput