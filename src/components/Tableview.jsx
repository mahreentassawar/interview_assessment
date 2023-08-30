import React, { useState } from 'react'
import {
  DataGrid,
} from '@mui/x-data-grid';
import { Avatar, Box, Container, IconButton, Tooltip } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Tableview({ listings, search }) {
  console.log(listings);

  const navigate = useNavigate();

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

  const columns = [
    {
      field: "imageUrl",
      headerName: "Poster",
      flex: 1,
      renderCell: (row) => {
        return (
          <Avatar variant="square" src={row.row.imageUrl} alt="..." sx={{ width: 100 }} />
        );
      },
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      renderCell: (row) => {
        return (
          <>
            {highlightMatch(row.row.title, search)}
          </>
        );
      },
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      renderCell: (row) => {
        return (
          <>
            {highlightMatch(row.row.address, search)}
          </>
        );
      },
    },
    {
      field: "coveredAreaSQFT",
      headerName: "Covered Area",
      flex: 1,
      renderCell: (row) => {
        return (
          <>
            {
              row.row.coveredAreaSQFT == undefined ?
                "null"
                :
                <>
                  {row.row.coveredAreaSQFT}&nbsp;&nbsp;sqft
                </>
            }
          </>
        );
      },
    },
    {
      field: "id",
      headerName: "Detail",
      flex: 1,
      renderCell: (row) => {
        return (
          <>
            <IconButton >
              <Tooltip title="details">
                <button onClick={() => detail(row.row)} style={{ backgroundColor: "transparent", border: "1px solid gray" }} ><ArrowForward sx={{ color: "#F49B17" }} /></button>
              </Tooltip>
            </IconButton>

          </>
        );
      },
    },
  ];

  const detail = (data) => {
    localStorage.setItem("details", JSON.stringify(data));
    navigate("/detailpage")
  }

  return (
    <Container>
      <Box sx={{ width: '100%' }}>

        <Box
          m="5px 0 0 0"
          height="50vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: "#F49B17",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#F49B17",
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "transparent",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              // backgroundColor: "#F49B17",
            },
            "& .MuiCheckbox-root": {
              color: `green !important`,
            },
          }}
        >
          <DataGrid
            rows={listings}
            columns={columns}
            getRowId={(row) => row.id}
          // disableColumnFilter
          // components={{
          //   Toolbar: CustomToolbar,
          // }}
          />
        </Box>

      </Box>
    </Container>

  )
}

export default Tableview
