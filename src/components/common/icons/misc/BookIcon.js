import React from "react";

export default function BookShelfIcon({ size, primaryColor, secondaryColor }) {
    const sz = size || 25;
    const cl = primaryColor || "black";
    const cl2 = secondaryColor || "black";

    return (
        <svg width={sz} height={sz} viewBox="0 0 34 34">
            <path
                stroke={cl2}
                strokeWidth="2"
                fill="none"
                d="M21.3,4.1c-1-0.2-1.9,0.1-2.7,0.6c-0.7,0.4-1.5,0.4-2.2,0c-0.8-0.5-1.7-0.8-2.7-0.6C11.3,4.4,9.7,7,10,9.7
	c0.3,2.7,2.9,7.6,5.2,7.2c0.3-0.1,0.6-0.2,0.9-0.4c0.8-0.6,2-0.6,2.7,0c0.3,0.2,0.6,0.4,0.9,0.4c2.3,0.4,4.9-4.4,5.2-7.2
	C25.3,7,23.7,4.4,21.3,4.1z"
            />
            <path strokeWidth="2" fill="none" stroke={cl} d="M14.6,1l0.2,0.1c1.3,0.7,2.1,1.7,2.1,2.9v0" />
            <path
                strokeWidth="2"
                fill="none"
                stroke={cl}
                d="M31,24H10.5C8.6,24,7,22.4,7,20.5v0c0-1.9,1.6-3.5,3.5-3.5H31"
                transform="translate(0, 1)"
            />
            <path
                strokeWidth="2"
                fill="none"
                stroke={cl}
                d="M30,17L30,17c-1.3,2.2-1.3,4.8,0,7l0,0"
                transform="translate(0, 1)"
            />
            <path
                strokeWidth="2"
                fill="none"
                stroke={cl}
                d="M25,31H4.5C2.6,31,1,29.4,1,27.5v0C1,25.6,2.6,24,4.5,24H25"
                transform="translate(0, 1)"
            />
            <path
                strokeWidth="2"
                fill="none"
                stroke={cl}
                d="M24,24L24,24c-1.3,2.2-1.3,4.8,0,7l0,0"
                transform="translate(0, 1)"
            />
        </svg>
    );
}
