import {Image} from "@chakra-ui/react";
import React from "react";
import CatLogo from "../../assets/CatwikiLogo.svg";

export default function CatWikiLogo(props: any){
    return (
        <Image src={CatLogo} alt="Cat header logo" className={`${props.parentClass ? props.parentClass : ""}`}/>
    );
}