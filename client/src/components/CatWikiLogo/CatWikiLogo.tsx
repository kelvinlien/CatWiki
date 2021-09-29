import {Image} from "@chakra-ui/react";
import React from "react";
import CatLogo from "../../assets/CatwikiLogo.svg";
import "./CatWikiLogo.css"

export default function CatWikiLogo(props: any){
    return (
        <Image src={CatLogo} alt="Cat header logo" className={`logo ${props.parentClass ? props.parentClass : ""}`}/>
    );
}