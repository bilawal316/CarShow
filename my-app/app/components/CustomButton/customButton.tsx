"use client"
import React from "react";
import Image from 'next/image'
import { CustomButtomProps } from "@/types";

const CustomButton = ({title, containerStyles, handleClick}: CustomButtomProps) => {

    return (

        <button 
        disabled = {false}
        type ={"button"}
        className="custom-btn ${containerStyles}"
        onClick={()=>{}}
        >
            <span className="flex-1 ">
                Title
            </span>

        </button>
    );
};

export default CustomButton;