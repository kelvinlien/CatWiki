import React from 'react';
import HeroImage from "../../components/HeroImage/HeroImage";
import {Stack} from "@chakra-ui/react";
import ImagesRow from "../../components/ImagesRow/ImagesRow";

const images = ["https://via.placeholder.com/1200x800","https://via.placeholder.com/1200x800","https://via.placeholder.com/1200x800","https://via.placeholder.com/1200x800"];
export default function Mainpage(){
    return(
        <Stack>
            <HeroImage/>
            <ImagesRow children={images}/>
        </Stack>
    );
}