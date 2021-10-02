import React from 'react';
import {Grid, Image} from "@chakra-ui/react";
import "./ImagesRow.css";
export default function ImagesRow(props: any){
    return(
        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
            {
                props.children.map((child: string) => {
                    return <Image src={child} alt={"Image"} className={"imageInRow"}/>
                })
            }
        </Grid>
    );
}