import { React, useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Tabs, Tab } from '@mui/material';
import  { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store';

const Header = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state=> state.isLoggedIn);

    const [value, setValue] = useState(0);

    return ( 
      <AppBar position="sticky"
      sx={{background:'#0039a6'}}
      >
        <Toolbar>
            { isLoggedIn && <Typography variant="h4">BlogsApp</Typography>}
            { !isLoggedIn && 
            <Box display="flex" marginLeft={'auto'} >
            <Typography variant="h4">BlogsApp</Typography>
            </Box>}
           { 
             isLoggedIn && <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
                <Tabs textColor="inherit" value={value} onChange={(e,val)=>setValue(val)}>
             <Tab LinkComponent={Link} to="/blogs" label="All Blogs" /> 
             <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
             <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
                </Tabs>
            </Box>
            }

        <Box display="flex" marginLeft="auto">

            {/* { !isLoggedIn && <> <Button variant="contained"
                sx={{ margin: 1, borderRadius: 20}} 
                color="warning"
                LinkComponent={Link} to="/auth"
                >Login
                </Button>

            <Button variant="contained" 
            sx={{ margin: 1, borderRadius: 20}} 
            color="warning"
            LinkComponent={Link} to="/auth"
            >Signup
            </Button> </> } */}

             { isLoggedIn &&
                <Button
                onClick={()=> dispatch(authActions.logout())} 
                variant="contained" 
                sx={{ margin: 1, borderRadius: 20}} 
                color="warning"
                LinkComponent={Link} to="/auth"
                >Logout
                </Button>
             } 
            </Box>
        </Toolbar>
      </AppBar> 
     );
}
 
export default Header;