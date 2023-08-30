import { ArrowForward, Error } from '@mui/icons-material'
import { Avatar, Card, CardContent, Grid, Stack, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cardview({ listings, search }) {
    const navigate = useNavigate();

    console.log(listings)

    const detail = (data) => {
        localStorage.setItem("details", JSON.stringify(data));
        navigate("/detailpage")
    }

    const highlightMatch = (text, term) => {
        const lowerText = text.toLowerCase();
        const lowerTerm = term.toLowerCase();
        const startIndex = lowerText.indexOf(lowerTerm);

        if (startIndex === -1) {
            return text;
        }

        const beforeMatch = text.slice(0, startIndex);
        const match = text.slice(startIndex, startIndex + term.length);
        const afterMatch = text.slice(startIndex + term.length);
        return (
            <>
                {beforeMatch}
                <span style={{ backgroundColor: '#FFB400' }}>{match}</span>
                {afterMatch}
            </>
        );
    };

    return (
        <>
            <Grid container spacing={0}>
                {
                    listings.length == 0 ?
                        <Grid container spacing={0} pt={10}>
                            <Grid xs={12} lg={12} align="center"  >
                                <Stack direction="column">
                                    <Error sx={{ fontSize: "5vh", color: "#8292bf", opacity: 0.5, alignSelf: "center" }} />
                                    <Typography vagriant='paragraph' align="center" sx={{ color: "#8292bf", opacity: 0.5, font: "normal normal bold 15px/25px Arial" }}>Data not found againt your're search !</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        :
                        <>
                            {listings.map((item) => (
                                <Grid xs={12} md={6} align="center" p={1}>
                                    <Card sx={{ boxShadow: "none", border: "1px solid lightblue" }}>
                                        <CardContent>
                                            <Grid container spacing={0}>
                                                <Grid xs={12} md={5} align="left">
                                                    <Avatar variant="square" src={item.imageUrl} sx={{ width: 150, height: 130 }} />
                                                </Grid>

                                                <Grid xs={12} md={7} align="left">
                                                    <Stack direction="column" spacing={1}>
                                                        <Stack direction="row" spacing={5}>
                                                            <Typography variant="paragraph" fontSize="17px" color="#222" fontWeight="bold">Property Type </Typography>
                                                            <Typography variant="paragraph" fontSize="14px" color="gray" pt={1} fontWeight="medium">{item.propertyType}  </Typography>
                                                        </Stack>

                                                        <Stack direction="row" spacing={5}>
                                                            <Typography variant="paragraph" fontSize="17px" color="#222" fontWeight="bold">Title </Typography>
                                                            <Typography variant="paragraph" fontSize="14px" color="gray" pt={1} fontWeight="medium">  {highlightMatch(item.title, search)} </Typography>
                                                        </Stack>

                                                        <Stack direction="row" spacing={5}>
                                                            <Typography variant="paragraph" fontSize="17px" color="#222" fontWeight="bold">Address </Typography>
                                                            <Typography variant="paragraph" fontSize="14px" color="gray" pt={1} fontWeight="medium"> {highlightMatch(item.address, search)}</Typography>
                                                        </Stack>

                                                        <Stack direction="row" spacing={5}>
                                                            <Typography variant="paragraph" fontSize="17px" color="#222" fontWeight="bold">Covered Area </Typography>
                                                            <Typography variant="paragraph" fontSize="14px" color="gray" pt={1} fontWeight="medium">{item.coveredAreaSQFT} sqft </Typography>
                                                        </Stack>

                                                    </Stack>
                                                </Grid>

                                                <Grid xs={12} align="right">
                                                    <Tooltip title="details">
                                                        <button onClick={() => detail(item)} style={{ backgroundColor: "transparent", border: "1px solid gray" }} ><ArrowForward sx={{ color: "#F49B17" }} /></button>
                                                    </Tooltip>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </>
                }
            </Grid>
        </>
    )
}

export default Cardview