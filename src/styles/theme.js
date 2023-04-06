import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            light: '#f79633',
            main: '#f57c00',
            dark: '#ab5600',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffd453',
            main: '#ffca28',
            dark: '#b28d1c',
            contrastText: '#000',
        },
    }
})

export default theme