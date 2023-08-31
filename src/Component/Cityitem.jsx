import React from "react";
import { Card,CardContent,Grid } from "@mui/material";

export const Cityitem =({item})=>{
    return(
        <Grid item xs={6}>
        <Card sx={{bgcolor: item.weather ? "green" : "red"}}>
            <CardContent>
              <h1>  {item.city}</h1>
                <h2>{item.weather}</h2>
               <h3> {item.state}</h3>
                <h4>{item.rainfall}</h4>
            </CardContent>
        </Card>
        </Grid>

    
    
    )


}