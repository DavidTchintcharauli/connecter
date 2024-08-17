import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-amber-400">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-14 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    <div>
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
                                    </div>
                                </NavLink>
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    <div>
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
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div>
                                <NavLink className='m-2' href={route('employees')} active={route().current('employees')}>
                                    <div>
                                        <div className='flex items-center justify-center'>
                                            <svg width="50" height="50" viewBox="0 0 501 521" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.5 79C0.5 46.9675 26.4675 21 58.5 21H63H110V21C110.828 21 111.5 21.6716 111.5 22.5V67.5C111.5 69.433 109.933 71 108 71V71H65.3738C59.6459 71 54.427 74.2891 51.9556 79.4564V79.4564C50.9974 81.46 50.5 83.6528 50.5 85.8738V452.896C50.5 457.787 52.3332 462.5 55.6379 466.105V466.105C59.3704 470.177 64.6515 472.479 70.1751 472.443L438.573 470.032C441.73 470.012 444.752 468.748 446.984 466.516V466.516C449.235 464.265 450.5 461.211 450.5 458.027V86.3639C450.5 82.2892 448.881 78.3813 446 75.5V75.5C443.119 72.6187 439.211 71 435.136 71H384V71C382.343 71 381 69.6569 381 68V24C381 22.3431 382.343 21 384 21V21H442.5C474.533 21 500.5 46.9675 500.5 79V463C500.5 495.033 474.533 521 442.5 521H58.5C26.4675 521 0.5 495.033 0.5 463V79Z" fill="black" />
                                                <rect x="11.5" y="-11.5" width="271" height="72" rx="36" transform="matrix(1 0 0 -1 100 72)" stroke="black" stroke-width="23" />
                                                <rect x="86" y="155" width="328" height="40" rx="20" fill="black" />
                                                <rect x="86" y="227" width="328" height="40" rx="20" fill="black" />
                                                <rect x="84" y="299" width="328" height="40" rx="20" fill="black" />
                                                <rect x="83" y="371" width="328" height="40" rx="20" fill="black" />
                                            </svg>
                                        </div>
                                        <div className='text-center'>
                                            Employees List
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink className='m-2' href={route('dashboard')} active={route().current('dashboard')}>
                                    <div>
                                        <div className='flex items-center justify-center'>
                                            <svg width="50" height="50" viewBox="0 0 509 507" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 77C0 38.3401 31.3401 7 70 7H279.748C290.697 7 299.61 15.8027 299.747 26.75V26.75C299.886 37.8926 290.892 47 279.748 47H74.1421C65.0871 47 56.4029 50.5971 50 57V57C43.5971 63.4029 40 72.0871 40 81.1421V432.858C40 441.913 43.5971 450.597 50 457V457C56.4029 463.403 65.0871 467 74.1421 467H425.858C434.913 467 443.597 463.403 450 457V457C456.403 450.597 460 441.913 460 432.858V162C460 150.954 468.954 142 480 142V142C491.046 142 500 150.954 500 162V437C500 475.66 468.66 507 430 507H70C31.3401 507 0 475.66 0 437V77Z" fill="black" />
                                                <path d="M206.548 341.813L141.579 366.002L166.781 301.419L206.548 341.813Z" stroke="black" stroke-width="9" />
                                                <rect x="448.896" y="94.918" width="49.7098" height="11.0137" transform="rotate(-135 448.896 94.918)" fill="black" />
                                                <rect x="410.76" y="76.8711" width="10" height="269.258" rx="5" transform="rotate(45 410.76 76.8711)" fill="black" />
                                                <rect x="456.565" y="8.5346" width="61.5322" height="410.266" rx="9" transform="rotate(45 456.565 8.5346)" stroke="black" stroke-width="12" />
                                            </svg>
                                        </div>
                                        <div className='text-center'>
                                            Request Post
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink className='m-2' href={route('dashboard')} active={route().current('dashboard')}>
                                    <div>
                                        <div className='flex items-center justify-center'>
                                            <svg width="50" height="50" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 250C0 111.929 111.929 0 250 0H264.5V161H111.5V161C109.015 161 107 163.015 107 165.5V189.5V326.5V326.5C107 333.404 112.596 339 119.5 339H380.5C387.404 339 393 333.404 393 326.5V326.5V189V164C393 162.343 391.657 161 390 161V161H264.5V0V0C394.563 0 500 105.437 500 235.5V250C500 388.071 388.071 500 250 500V500C111.929 500 0 388.071 0 250V250Z" fill="black" />
                                                <path d="M245.618 264.961L108.104 174.943C101.452 170.589 104.535 160.25 112.485 160.25L387.515 160.25C395.465 160.25 398.548 170.589 391.896 174.943L254.382 264.961C251.72 266.703 248.28 266.703 245.618 264.961Z" stroke="black" stroke-width="12" />
                                            </svg>
                                        </div>
                                        <div className='text-center'>
                                            Messages
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink className='m-2' href={route('dashboard')} active={route().current('dashboard')}>
                                    <div>
                                        <div className='flex items-center justify-center'>
                                            <svg width="50" height="50" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="401" width="500" height="24" fill="black" />
                                                <path d="M43 360H457L500 401H0L43 360Z" fill="black" />
                                                <path d="M43 209C43 126.157 110.157 59 193 59H307C389.843 59 457 126.157 457 209V360H43V209Z" fill="black" />
                                                <path d="M194 441H306V444C306 474.928 280.928 500 250 500V500C219.072 500 194 474.928 194 444V441Z" fill="black" />
                                                <path d="M306 59L194 59V56C194 25.0721 219.072 0 250 0V0C280.928 0 306 25.0721 306 56V59Z" fill="black" />
                                            </svg>
                                        </div>
                                        <div className='text-center'>
                                            Notifications
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div>
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <div>

                                                </div>
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    <div>
                                                        <div>
                                                            <div className='flex'>
                                                                <div>
                                                                    <svg width="50" height="50" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect x="4.5" y="4.5" width="491" height="491" rx="245.5" fill="#D9D9D9" fill-opacity="0.28" stroke="black" stroke-width="9" />
                                                                        <circle cx="250" cy="119" r="105" fill="black" />
                                                                        <path d="M73 347.441C73 280.923 126.923 227 193.441 227H305.559C372.077 227 426 280.923 426 347.441V347.441C426 431.697 357.697 500 273.441 500H225.559C141.303 500 73 431.697 73 347.441V347.441Z" fill="black" />
                                                                    </svg>
                                                                </div>
                                                                <div className='items-center content-center'>
                                                                    {user.name}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-center">
                                                            <div className="items-center content-center">
                                                                <svg
                                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
