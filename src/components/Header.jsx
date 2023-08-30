import React from 'react'
import background from "../Assets/background.jpg";
import { Box, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Header({ text }) {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "40vh"
            }}>
                <Box sx={{ width: "100%", height: "40vh", background: "rgb(0,0,0,0.3)" }}>
                    {window.location.href == "http://localhost:3000/detailpage" ?
                        <ArrowBack sx={{ pl: 2, pt: 2, color: "white" }} onClick={() => navigate("/")} />
                        :
                        <></>
                    }
                    <div style={{ display: "flex", alignContent: "center", alignItems: "center", height: "40vh" }}>
                        <Typography variant="h6" fontSize="40px" pl={2} pr={2} color="#FFFFFF" fontWeight="bold">{text}</Typography>
                    </div>
                </Box>
            </Box>

        </>
    )
}

export default Header