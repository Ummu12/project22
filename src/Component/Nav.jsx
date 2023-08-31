import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { NavData } from "../NavData";
import { Navitem } from "./Navitem";

export const Nav=()=>{
    return (
        <Grid container spacing={2}>
          {
              NavData.map(item=>
                  <Navitem xs={item.xs}
                  path={item.path}  title={item.title}/>
                                 )
          }
        </Grid>
    )
}