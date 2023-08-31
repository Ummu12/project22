import React from "react";
import { Grid } from "@mui/material";
import { Fullitem } from "./Fullitem";
import { FullData } from "../FullData";

export const Fullname=()=>{
    return(
         <Grid container spacing={2}>  
             {
            FullData.map(item=>
            <Fullitem item={item}/>
            )
}
            </Grid>
        )
    
}