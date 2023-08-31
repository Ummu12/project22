import React from "react";
import { Card,CardContent,Button,Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { NavData } from "../NavData";

export const Navitem=({xs,title,path})=>{
    
    return(
        <Grid item xs={xs}>
          <Link to={path}>
          <Button variant="contained" fullWidth color="success">
            {title}
          </Button>
          </Link>
          
        </Grid> 
        
    )
}