import React,{ useState } from 'react';
import axios from "axios";
import { Typography,Button, Box , TextField, InputLabel} from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

const labelStyles = {mb:1,mt:2,fontSize:'24px', fontWeight:'bold' };

const AddBlog = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        title:"",
        description:"",
        imageURL:""
       });

       const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
        }));
       };
     const sendRequest = async () => {
        const res = await axios.post("http://localhost:5000/api/blog/add",{
            title:inputs.title,
            description: inputs.description,
            imageURL: inputs.imageURL,
            user: localStorage.getItem("userId")
        }).catch((err)=> console.log(err));
        const data = await res.data;
        return data;
     }

       const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(data=> console.log(data)).then(() =>Navigate("/blogs"));
       };
    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <Box border={3} 
                borderColor='linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(83,38,169,0.8468429608171394) 22%, rgba(0,212,255,1) 100%)'
                borderRadius={10} 
                boxShadow="10px 10px 20px #ccc" 
                padding={3} 
                marginTop={1}
                marginLeft={10}
                margin="normal" 
                display='flex' 
                align-items={'center'}
                flexDirection={'column'} 
                width={"80%"} >

                    <Typography 
                    fontWeight={'bold'} 
                    padding={3} 
                    color="grey" 
                    variant="h2" 
                    textAlign={'center'}>
                        Post Your Blog
                    </Typography>

                    <InputLabel 
                    sx={labelStyles}>
                        Title</InputLabel>
                    <TextField name="title" 
                    value={inputs.title}  
                    onChange={handleChange} 
                    variant="outlined" />

                    <InputLabel 
                    sx={labelStyles}>
                        Description</InputLabel>
                    <TextField name="description"
                    value={inputs.description}  
                    onChange={handleChange} 
                    variant="outlined" />

                    <InputLabel 
                    sx={labelStyles}>
                        ImageURL</InputLabel>
                    <TextField name="imageURL"
                    value={inputs.imageURL}  
                    onChange={handleChange} 
                    variant="outlined" />

                    <Button sx={{mt:2,borderRadius:4}} 
                    variant="contained" 
                    color="warning" 
                    type="submit">
                      Submit</Button>

                </Box>
            </form>
        </div>
    );
}
 
export default AddBlog;
