import React from 'react';
import {Box, Grid, Image, Text} from "@chakra-ui/react";
import "./ImagesRow.css";

interface breedData{
    image: string,
    name: string
}

export default function ImagesRow(){
    const children = [
        {
            image: "https://via.placeholder.com/1200x800",
            name: "Belgan"
        },
        {
            image: "https://via.placeholder.com/1200x800",
            name: "British short hair"
        },
        {
            image: "https://via.placeholder.com/1200x800",
            name: "Egyptian queen"
        },
        {
            image: "https://via.placeholder.com/1200x800",
            name: "Normad"
        }
    ];
    return(
        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
            {
                children.map((child: breedData) => {
                    return <Box>
                        <Image src={child.image} alt={"Image"} className={"imageInRow"}/>
                        <Text className={"nameInRow"}>{child.name}</Text>
                    </Box>
                })
            }
        </Grid>
    );
}