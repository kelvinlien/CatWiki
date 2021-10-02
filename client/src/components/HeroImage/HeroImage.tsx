import React from 'react';
import {Box, Center, Image} from '@chakra-ui/react';
import CatHeroImageLg from "../../assets/HeroImagelg.png";
import CatHeroImageMd from "../../assets/HeroImagemd.png";
import CatHeroImageSm from "../../assets/HeroImagesm.png";
import "./HeroImage.css"
export default function HeroImage(){
    return(
        <Center className={"heroWrapper"}>
            <Image src={CatHeroImageLg} alt={CatHeroImageMd} className={"heroImage"}/>
        </Center>
    );
}