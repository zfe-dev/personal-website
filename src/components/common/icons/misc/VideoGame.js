export default function VideoGame({ size, primaryColor, secondaryColor }) {
    const sz = size || 25;
    const cl = primaryColor || "black";
    const cl2 = secondaryColor || "black";

    return (
        <svg fill="none" width={sz} height={sz} viewBox="0 10 64 64">
            <path
                fill={cl}
                stroke={cl}
                strokeWidth={1}
                d="M60.6,49.5l-5.3-16.6c-0.8-2.5-2.8-4.2-5.3-4.7V27c0-1.7-1.3-3-3-3h-4c-1.7,0-3,1.3-3,3v1H24v-1c0-1.7-1.3-3-3-3h-4    c-1.7,0-3,1.3-3,3v1.1c-2.5,0.5-4.5,2.3-5.3,4.7L3.4,49.5c-1.2,3.8,0.4,7.9,3.9,10.1c1.6,1,3.4,1.5,5.2,1.5c2.7,0,5.4-1.1,7.2-3.2    l3.3-3.3c0.9-0.9,2.2-1.5,3.6-1.5h11c1.3,0,2.6,0.5,3.6,1.5l3.2,3.3c3.1,3.5,8.4,4.3,12.5,1.8C60.2,57.4,61.8,53.2,60.6,49.5z     M42,27c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v1h-6V27z M16,27c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v1h-6V27z M55.7,57.8    c-3.2,2-7.5,1.4-9.9-1.4l-3.3-3.3c-1.3-1.3-3.1-2.1-5-2.1h-11c-1.9,0-3.7,0.8-5,2.1l-3.3,3.4c-2.4,2.8-6.7,3.4-9.9,1.4    c-2.7-1.7-3.9-4.8-3-7.7l5.3-16.6c0.7-2.1,2.6-3.5,4.8-3.5H23h18h7.6c2.2,0,4.1,1.4,4.8,3.5l5.3,16.6C59.6,53,58.4,56.1,55.7,57.8    z"
            />

            <path
                fill={cl2}
                stroke={cl2}
                strokeWidth={2}
                d="M19,36c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S22.3,36,19,36z M19,46c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S21.2,46,19,46z    "
            />

            <path
                fill={cl2}
                stroke={cl2}
                strokeWidth={2}
                d="M45,36c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S48.3,36,45,36z M45,46c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S47.2,46,45,46z    "
            />
        </svg>
    );
}