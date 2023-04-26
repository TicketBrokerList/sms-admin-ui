import * as React from 'react';
import { defaultTheme, Layout, AppBar, ToggleThemeButton, TitlePortal } from 'react-admin';
import { createTheme, Box, Typography } from '@mui/material';

const darkTheme = createTheme({
    palette: { mode: 'dark' },
});

const MyAppBar = () => (
    <AppBar>
        <TitlePortal />
        <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />
    </AppBar>
);

export const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;