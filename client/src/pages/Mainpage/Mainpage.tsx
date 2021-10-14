import React from 'react';
import {Container, Text} from "@chakra-ui/react";
import "./Mainpage.css"
import HeroSection from "../../components/HeroSection/HeroSection";
import DiscoverySection from "../../components/DiscoverySection/DiscoverySection";

export default function Mainpage(){
    return(
        <Container>
            <HeroSection/>
            <DiscoverySection />
        </Container>
    );
}