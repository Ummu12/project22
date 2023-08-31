import React from "react";
import { Card,CardContent,Grid } from "@mui/material";

export const Fullitem=({item})=>{
  return(
    <Grid item xs={6}>
    <Card sx={{bgcolor:"salmon"}}>
        <CardContent>
     <h1>{item.fname} {item.mname} {item.lname}</h1>
        </CardContent>
    </Card>
    </Grid>
  )
}