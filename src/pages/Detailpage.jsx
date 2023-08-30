import { Avatar, Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';

function Detailpage() {

    const [data, setData] = useState("");

    useEffect(() => {
        const details = JSON.parse(localStorage.getItem('details'));
        console.log(details);
        setData(details);
    }, [])

    return (
        <>
            <Header text="Detail Page" />

            <Container>
                <Box align="center" pt={{ xs: 5, md: 12 }}>
                    <Card sx={{ boxShadow: "none", border: "1px solid lightblue", width: { xs: "100%", md: "80%" } }}>
                        <CardContent>
                            <Grid container spacing={0}>
                                <Grid xs={12} md={4}>
                                    <Avatar variant="square" src={data.imageUrl} sx={{ width: 150, height: 130 }} />
                                </Grid>

                                <Grid xs={12} md={4.5} align="left">
                                    <Stack direction="column" spacing={1}>
                                        <Stack direction="row" spacing={5}>
                                            <Typography variant="paragraph" fontSize="20px" color="#222" fontWeight="bold">Property Type </Typography>
                                            <Typography variant="paragraph" fontSize="14px" color="gray" pt={1} fontWeight="medium">{data.propertyType}  </Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={5}>
                                            <Typography variant="paragraph" fontSize="20px" color="#222" fontWeight="bold">Title </Typography>
                                            <Typography variant="paragraph" fontSize="14px" color="gray" pt={1} fontWeight="medium">{data.title} </Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={5}>
                                            <Typography variant="paragraph" fontSize="20px" color="#222" fontWeight="bold">Address </Typography>
                                            <Typography variant="paragraph" fontSize="14px" color="gray" pt={1} fontWeight="medium">{data.address} </Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={5}>
                                            <Typography variant="paragraph" fontSize="20px" color="#222" fontWeight="bold">Covered Area </Typography>
                                            <Typography variant="paragraph" fontSize="14px" color="gray" pt={1} fontWeight="medium">{data.coveredAreaSQFT} sqft </Typography>
                                        </Stack>

                                    </Stack>
                                </Grid>

                                <Grid xs={12} md={3.5}>
                                    <Stack direction="column" spacing={1}>
                                        <Stack direction="row" spacing={5}>
                                            <Typography variant="paragraph" fontSize="20px" color="#222" fontWeight="bold">Beds </Typography>
                                            <Typography variant="paragraph" fontSize="14px" color="gray" pt={1} fontWeight="medium">{data.beds} </Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={5}>
                                            <Typography variant="paragraph" fontSize="20px" color="#222" fontWeight="bold">Bath </Typography>
                                            <Typography variant="paragraph" fontSize="14px" color="gray" pt={1} fontWeight="medium">{data.bath} </Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={5}>
                                            <Typography variant="paragraph" fontSize="20px" color="#222" fontWeight="bold">Commercial </Typography>
                                            <Typography variant="paragraph" fontSize="14px" color="gray" pt={1} fontWeight="medium">
                                                {data.isCommercial ? "True" : "False"}
                                            </Typography>
                                        </Stack>

                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            </Container>

        </>
    )
}

export default Detailpage
