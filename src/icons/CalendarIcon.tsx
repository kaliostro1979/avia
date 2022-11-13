import React from 'react';

const CalendarIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <g clipPath="url(#a)">
                <path d="M12.667 1.333H12V.667a.666.666 0 10-1.333 0v.666H5.333V.667A.667.667 0 104 .667v.666h-.667A3.337 3.337 0 000 4.667v8A3.337 3.337 0 003.333 16h9.334A3.337 3.337 0 0016 12.667v-8a3.338 3.338 0 00-3.333-3.334zM1.333 4.667a2 2 0 012-2h9.334a2 2 0 012 2v.666H1.333v-.666zm11.334 10H3.333a2 2 0 01-2-2v-6h13.334v6a2 2 0 01-2 2z"></path>
                <path d="M8 11a1 1 0 100-2 1 1 0 000 2zm-3.333 0a1 1 0 100-2 1 1 0 000 2zm6.666 0a1 1 0 100-2 1 1 0 000 2z"></path>
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="currentColor" d="M0 0h16v16H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
};

export default CalendarIcon;
