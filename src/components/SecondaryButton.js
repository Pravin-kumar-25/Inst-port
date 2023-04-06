import { Button } from '@mui/material'
import { withStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'

// const SecondaryButton = styled(Button)({
//     border: '2px solid',
//     borderRadius: '5px',
//     color: 'primary',
//     '&:hover': {
//         border: '2px solid',
//         background: props => props.theme.palette.primary.main,
//     },
// })

const SecondaryButton = withStyles((theme) => ({
    root: {
        border: '2px dotted',
        borderRadius: '5px',
        color: 'primary',
        '&:hover': {
            border: '2px solid',
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText
        },
    }
}))(Button)

export default SecondaryButton