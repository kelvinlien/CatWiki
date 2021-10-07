import React from 'react';
import {Container, Text} from "@chakra-ui/react";
import "./Mainpage.css"
import DiscoveryImage from "../../components/DiscoveryImage/DiscoveryImage";
import HeroSection from "../../components/HeroSection/HeroSection";

const images = ["https://via.placeholder.com/1200x800","https://via.placeholder.com/1200x800","https://via.placeholder.com/1200x800","https://via.placeholder.com/1200x800"];
export default function Mainpage(){
    return(
        <Container>
            <HeroSection/>
            <DiscoveryImage/>
        </Container>
    );
}