import React from "react";
import { Card,CardContent,Grid } from "@mui/material";
import { UserData} from "../UserData";
import { Useritem} from "./Useritem";


export const User=()=>{
    return(
  <Grid container spacing={2}>

         
             {
                 UserData.map(item=>
                <Useritem item={item}/>)
             }
          

     
  </Grid>
       
    )
}

