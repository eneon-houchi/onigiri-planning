import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ReactDom from 'react-dom';

function App(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}>
                傾国・群雄おにぎり計画
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
