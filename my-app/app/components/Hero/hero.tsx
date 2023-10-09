"use client"
import React from "react";
import Image from 'next/image'
import CustomButton from '../../components/CustomButton/customButton'

const Hero = () => {
    const handleScroll =() => {}
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title"> Find, book, or reant a car -- quickly and easily!</h1>
                <p className="her__subtitle"> Streamline your car renral experience with our effortless boking process. </p>
                <CustomButton 
                title= "Explore Cars"
                containerStyles="bg-primary-blue
                text-white rounded-full mt-10"
                handleClick={handleScroll}
                />
            </div>
        </div>
    );
};
 
export default Hero;