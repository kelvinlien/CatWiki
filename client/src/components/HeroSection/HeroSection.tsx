import React from 'react';
import CatWikiLogo from "../CatWikiLogo/CatWikiLogo";
import {Box, Center, Text} from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
import "./HeroSection.css"

function HeroSection(props: any) {
    return (
        <Center>
            <Box className={"heroSectionBackground"}>
                <Box className={"heroSectionWrapper"}>
                    <CatWikiLogo parentClass="heroCatWikiLogo"/>
                    <Text className={"heroText"}>Get to know more about your cat breed</Text>
                    <SearchBar placeholder={"Enter your breed"} parentClass={"heroSearchBar"}/>
                </Box>
            </Box>
        </Center>
    );
}

export default HeroSection;