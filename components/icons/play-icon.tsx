import React from 'react'

const PlayIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={56}
            height={56}
            fill="none"
            viewBox="0 0 56 56"
        >
            <circle
                cx={28}
                cy={28}
                r={28}
                fill="#fff"
                fillOpacity="0.5"
            />
            <circle cx="27.999" cy={28} r="25.415" fill="#fff" />
            <path
                fill="#1CAB55"
                d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
            />
        </svg>
    )
}

export default PlayIcon