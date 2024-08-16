import { Link, usePage } from "@inertiajs/react";

export default function Header(auth, laravelVersion, phpVersion) {

    return (
        <div className="sm:fixed bg-sky-300 sm:top-0 sm:right-0 p-3 flex justify-between items-center space-x-4 w-full">
            <Link
                href='/'
            >
                <svg width="75" height="75" viewBox="0 0 245 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M132.044 98.7557L147.365 85.8999C155.827 78.7999 168.442 79.9036 175.542 88.3651C182.642 96.8266 181.538 109.442 173.077 116.542L157.756 129.397L132.044 98.7557Z" stroke="black" stroke-width="10" />
                    <path d="M83.365 139.9L98.6859 127.044L124.397 157.686L109.077 170.542C100.615 177.642 87.9999 176.538 80.8999 168.077C73.7999 159.615 74.9036 147 83.365 139.9Z" stroke="black" stroke-width="10" />
                    <rect x="106" y="128.07" width="25" height="10" transform="rotate(-40 106 128.07)" fill="black" />
                    <rect x="119" y="144.07" width="25" height="10" transform="rotate(-40 119 144.07)" fill="black" />
                    <rect x="176" y="82.0697" width="25" height="10" transform="rotate(-40 176 82.0697)" fill="black" />
                    <rect x="55" y="182.07" width="25" height="10" transform="rotate(-40 55 182.07)" fill="black" />
                    <path d="M230.5 163.5L228.851 167.504C218.63 192.327 199.637 212.681 175.627 224.687V224.687C158.25 233.375 138.787 237.365 119.397 236.158V236.158C70.32 233.104 29.0615 197.267 18.4729 149.249V149.249C16.188 138.888 15.3972 128.124 16.1791 117.542V117.542C19.8897 67.3258 57.435 26.146 107.096 17.8244L115 16.5L120.316 16.0911C164.192 12.716 205.683 36.461 225 76V76" stroke="black" stroke-width="30" />
                </svg>
            </Link>
            <div className='flex'>
                <Link className='mx-3'>
                    <div>
                        <svg width="50" height="50" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="15" y="15" width="470" height="470" rx="235" stroke="black" stroke-width="30" />
                            <path d="M232.424 207.985L235.713 206.643C274.054 191.007 312.739 228.299 298.52 267.187C293.756 280.216 283.556 290.525 270.578 295.427L267.255 296.682C228.455 311.337 190.753 272.86 206.194 234.366C211.001 222.381 220.467 212.861 232.424 207.985Z" stroke="black" stroke-width="46" />
                            <path d="M165.83 334.992L213.716 215.614L335.545 165.93L291.017 287.707L165.83 334.992Z" stroke="black" stroke-width="46" />
                        </svg>
                    </div>
                    <div className='text-center'>
                        browse
                    </div>
                </Link>
                <Link className='mx-3'>
                    <div>
                        <svg width="50" height="50" viewBox="0 0 500 433" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 132C0 104.386 22.3858 82 50 82H450C477.614 82 500 104.386 500 132V232H0V132Z" fill="black" />
                            <path d="M0 283H169.5V336H334.75V283H500V383C500 410.614 477.614 433 450 433H50C22.3858 433 0 410.614 0 383V283Z" fill="black" />
                            <g filter="url(#filter0_d_8_14)">
                                <mask id="path-3-inside-1_8_14" fill="white">
                                    <path d="M128 50C128 22.3858 150.386 0 178 0H322C349.614 0 372 22.3858 372 50V82H128V50Z" />
                                </mask>
                                <path d="M78 50C78 -5.22847 122.772 -50 178 -50H322C377.228 -50 422 -5.22847 422 50H322H178H78ZM372 82H128H372ZM78 82V50C78 -5.22847 122.772 -50 178 -50V50V82H78ZM322 -50C377.228 -50 422 -5.22847 422 50V82H322V50V-50Z" fill="black" mask="url(#path-3-inside-1_8_14)" />
                            </g>
                            <defs>
                                <filter id="filter0_d_8_14" x="124" y="0" width="252" height="90" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_14" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_14" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className='text-center'>
                        job
                    </div>
                </Link>
            </div>
            <div className='end'>
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-none transition-colors duration-300 ease-in-out"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <div className='flex justify-center'>
                        <div className='bg-green-500 hover:bg-green-600 m-3 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out'>
                            <Link
                                href={route('login')}
                                className="font-semibold  my-2 mx-4 text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-none transition-colors duration-300 ease-in-out"
                            >
                                Log In
                            </Link>
                        </div>
                        <div className='bg-green-500 hover:bg-green-600 m-3 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out'>
                            <Link
                                href={route('register')}
                                className="m-4 font-semibold my-2 mx-4 text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-none transition-colors duration-300 ease-in-out"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
