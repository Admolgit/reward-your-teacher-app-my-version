import React from 'react';
import image from "../assets/Ryticon.png";

function Ryticon(props: { className: string | undefined; }) {
    return (
        <div>
            <img src={image} className={props.className} alt={'icon'} />
            {/* "mt-8 rounded-full h-16 w-16 flex items-center justify-center" alt="#" */}
        </div>
    );
}

export default Ryticon;