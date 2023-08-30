import React, { useEffect, useState } from 'react'
import { getListingDetail, getPropertyListings } from '../components/Listings'
import Tableview from '../components/Tableview';
import Cardview from '../components/Cardview';
import loadinggif from "../Assets/loadinggif.gif";
import { Box, Container, Grid, IconButton, InputAdornment, OutlinedInput, Tooltip } from '@mui/material';
import Header from '../components/Header';
import { GridView, List, Search } from '@mui/icons-material';

function Landingpage() {

    const [listings, setListings] = useState([]);
    const [viewType, setViewType] = useState('table');

    useEffect(() => {
        getPropertyListings().then((data) => {
            setListings(data);
            console.log(data)
        });

    }, []);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a 2-second loading interval
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    // search
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = listings.filter(item =>
        (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.address && item.address.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <>
            <Box align="center" sx={{ height: "100vh" }}>
                {loading ?
                    <Grid container spacing={0}>
                        <Grid xs={12} align="center">
                            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", height: "100vh" }}>
                                <img src={loadinggif} alt="..." style={{ width: "10%" }} />
                            </div>
                        </Grid>
                    </Grid>
                    :
                    <>
                        <Header text="Landing Page" />
                        <Container>
                            <Grid container spacing={0} pt={1} pb={1}>

                                <Grid xs={12} md={11} align="right">
                                    <Box sx={{ width: { xs: "100%", md: "40%" } }}>
                                        <Box sx={{ border: "1px solid lightgrey", borderRadius: "5px", width: "90%" }}>
                                            <OutlinedInput
                                                placeholder='Search here'
                                                id="input-with-icon-adornment"
                                                sx={{
                                                    width: "100%",
                                                    fontSize: "15px",
                                                    height: "35px",
                                                    "& fieldset": { border: 'none' },
                                                }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton edge="end"  >
                                                            <Search sx={{ fontSize: "15px", color: "gray" }} />
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                value={searchTerm}
                                                onChange={e => setSearchTerm(e.target.value)}
                                            />
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid xs={12} md={1} align="right" pt={0.5}>

                                    <Tooltip title="listview">
                                        <button style={{ backgroundColor: "transparent", border: "1px solid gray" }} onClick={() => setViewType("table")}> <List sx={{ color: "#F49B17" }} /></button>
                                    </Tooltip>


                                    <Tooltip title="gridview">
                                        <button style={{ backgroundColor: "transparent", border: "1px solid gray" }} onClick={() => setViewType("card")}><GridView sx={{ color: "#F49B17" }} /></button>
                                    </Tooltip>
                                </Grid>

                            </Grid>

                            {viewType === 'table' ? <Tableview listings={filteredData} search={searchTerm} /> : <Cardview listings={filteredData} search={searchTerm} />}

                        </Container>
                    </>
                }
            </Box>
        </>
    )
}

export default Landingpage