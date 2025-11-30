import React from "react";
import travel from "../assets/travel1.webp";


export default function RentalDetails(){
    return(
        <section>
            <div className="bg-cover bg-center w-full h-153 "
                style={{ backgroundImage: `url(${travel})` }}
                >
                <div className="absolute inset-0 bg-black/25 "></div>
                    <h1 className="text-white text-bold text-[30px] text-left ml-20 mt-15">
                    Discover Nepal's
                    Hidden Treasures</h1>
            </div>
            

        
            <div className="p-[120px] max-w-[1400px] p-10 max-auto px-[20px]">
                <h1 className="text-4xl text-bold">Rental Details</h1>
                <p className="text-gray-600">
                    This is detailed page for Tours and Rental.
                </p>
            </div>
        </section>
    );
}