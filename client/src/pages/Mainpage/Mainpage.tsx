import React from 'react';
import HeroImage from "../../components/HeroImage/HeroImage";
import {Container, Text} from "@chakra-ui/react";
import CatWikiLogo from "../../components/CatWikiLogo/CatWikiLogo";
import "./Mainpage.css"
import SearchBar from "../../components/SearchBar/SearchBar";
import DiscoveryImage from "../../components/DiscoveryImage/DiscoveryImage";

const images = ["https://via.placeholder.com/1200x800","https://via.placeholder.com/1200x800","https://via.placeholder.com/1200x800","https://via.placeholder.com/1200x800"];
export default function Mainpage(){
    return(
        <Container>
            <HeroImage/>
            <CatWikiLogo parentClass="heroCatWikiLogo"/>
            <Text className={"heroText"}>Get to know more about your cat breed</Text>
            <SearchBar placeholder={"Enter your breed"} parentClass={"heroSearchBar"}/>
            <DiscoveryImage/>
        </Container>
    );
}