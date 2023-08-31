import React from "react";
import { Card,CardContent,Grid } from "@mui/material";

 export const Useritem=({item})=>{
    return(
        <Grid item xs={6}>
        <Card sx={{bgcolor:"aqua"}}>
            <CardContent>
              <h1> {item.userId}</h1>
                <h2>{item.id}</h2>
                 <h3>  {item.title}</h3>
            </CardContent>
        </Card>
        </Grid>
    )
 }


