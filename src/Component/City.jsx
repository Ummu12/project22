import React from "react";
import { Grid,Card,CardContent } from "@mui/material";
import { CityData } from "../CityData";
import { Cityitem } from "./Cityitem";


export const City=()=>{
    return( 
        
                 <Grid container spacing={2}>  
                     {
                    CityData.map(item=>
                    <Cityitem item={item}/>
                    )
        }
                    </Grid>
                )
            
        
}


