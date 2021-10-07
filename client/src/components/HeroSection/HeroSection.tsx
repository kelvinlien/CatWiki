import React from 'react';
import HeroImage from "../HeroImage/HeroImage";
import CatWikiLogo from "../CatWikiLogo/CatWikiLogo";
import {Box, Text} from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
import "./HeroSection.css"

function HeroSection(props: any) {
    return (
        <Box className={"heroSectionWrapper"}>
            <HeroImage/>
            <CatWikiLogo parentClass="heroCatWikiLogo"/>
            <Text className={"heroText"}>Get to know more about your cat breed</Text>
            <SearchBar placeholder={"Enter your breed"} parentClass={"heroSearchBar"}/>
        </Box>
    );
}

export default HeroSection;