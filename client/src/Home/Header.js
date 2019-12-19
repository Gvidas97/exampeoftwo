import React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default props =>
<AppBar position="static">
  <Toolbar>
    <Typography class="Header-text" variant="headline" color="inhertit">
      BalticAmadeus Task 2
    </Typography>
  </Toolbar>
</AppBar>
