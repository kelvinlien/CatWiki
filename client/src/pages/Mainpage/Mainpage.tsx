import React from 'react';
import {Container, Text} from "@chakra-ui/react";
import "./Mainpage.css"
import HeroSection from "../../components/HeroSection/HeroSection";
import DiscoverySection from "../../components/DiscoverySection/DiscoverySection";

const images = ["https://via.placeholder.com/1200x800","https://via.placeholder.com/1200x800","https://via.placeholder.com/1200x800","https://via.placeholder.com/1200x800"];
export default function Mainpage(){
    return(
        <Container>
            <HeroSection/>
            <DiscoverySection />
        </Container>
    );
}