import { Button } from "@mui/material";
import { createStyles, withStyles } from '@mui/styles'

const primaryButton = (props) => {
    const { children } = props

    return (
        <div className="buttonBorder">
            <PrimaryButton {...props} >{children}</PrimaryButton>
        </div>
    )
}

const PrimaryButton = withStyles((theme) => ({
    root: {
        borderRadius: '0px',
        background:theme.palette.primary.main,
        color: 'white',
        position:'relative',
        '&:hover': {
            background: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText
        },
    }
}))(Button)

export default primaryButton