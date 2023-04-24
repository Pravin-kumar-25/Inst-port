import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            light: '#F2F5F5',
            main: '#8739F9',
            dark: '#5e18c7',
            contrastText: '#F2F5F5',
        },
        secondary: {
            light: '#b4e5fa',
            main: '#37B9F1',
            dark: '#1084b5',
            contrastText: '#565360',
        },
    }
})

export default theme