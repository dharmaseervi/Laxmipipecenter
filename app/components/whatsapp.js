
'use cleint'
import React from 'react';
import { IconButton } from "@material-tailwind/react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Whatsapp() {
    const handleClick = () => {
        window.open('https://wa.me/919480641307?text=Hello%20from%20your%20website', '_blank');
    }
    return (
        <div className="fixed bottom-4 right-4 z-10">
            <IconButton onClick={handleClick} className="rounded bg-[#33e85a] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10 p-6">
                <FaWhatsapp size={30} />
            </IconButton>
        </div>
    );
}
