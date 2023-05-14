import { Paper } from "@mui/material";
import { withStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';

// const GridItem = withStyles((theme) => ({
//     backgroundColor: '#1A2027',
//     padding: '10px',
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }))(Paper)

const GridItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.secondary,
  }));

export default GridItem