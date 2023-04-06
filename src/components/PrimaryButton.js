import { Button } from "@mui/material";
import { createStyles, withStyles } from '@mui/styles'

const primaryButton = (props) => {
    const { classes, children } = props

    return (
        <div className="buttonBorder">
            <PrimaryButton >{children}</PrimaryButton>
        </div>
    )
}

const PrimaryButton = withStyles((theme) => ({
    root: {
        borderRadius: '0px',
        background:theme.palette.primary.light,
        color: 'white',
        position:'relative',
        '&:hover': {
            background: theme.palette.secondary.light,
            color: theme.palette.primary.dark
        },
    }
}))(Button)

export default primaryButton