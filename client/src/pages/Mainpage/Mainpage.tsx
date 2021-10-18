import React from 'react';
import {Container} from "@chakra-ui/react";
import "./Mainpage.css"
import HeroSection from "../../components/HeroSection/HeroSection";
import DiscoverySection from "../../components/DiscoverySection/DiscoverySection";
import CatsCollage from "../../components/CatsCollage/CatsCollage";
import WhyCatSection from "../../components/WhyCatSection/WhyCatSection";

export default function Mainpage(){
    return(
        <Container>
            <HeroSection/>
            <DiscoverySection />
            <WhyCatSection/>
        </Container>
    );
}