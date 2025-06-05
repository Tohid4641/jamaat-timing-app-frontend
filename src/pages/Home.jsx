import React, { useEffect, useState } from 'react';
import MasjidTiming from '../components/MasjidTiming.jsx';
import SelectMasjidSidebar from '../components/SelectMasjidSidebar.jsx';
import { useSelector } from 'react-redux';

const Home = ({ isSidebarOpen, onCloseSidebar, onOpenSidebar }) => {
    const [selectedMosque, setSelectedMosque] = useState();

    const handleSelectMosque = (mosque) => {
        setSelectedMosque(mosque);
        onCloseSidebar()
    };

    return (
        <div className="relative">
            {/* Banner Section */}
            {!selectedMosque && (
                <div
                    className="h-screen-minus-navbar flex flex-col items-center justify-center text-center bg-cover bg-bottom"
                    style={{ backgroundImage: 'url("/assets/bg.jpg")', opacity: 0.7 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 ">
                        Masjid Jamaat Timing
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 max-w-2xl">
                        Find your nearby mosque prayer timings.
                    </p>
                    <button id='select-btn' onClick={(e) => {
                        e.preventDefault();
                        onOpenSidebar();
                    }} className='mt-4 p-2 border first-bg-color hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:ring-1 drop-shadow-lg'>
                        Select Masjid
                    </button>
                </div>
            )}

            {/* Mosque Timing Section */}
            {selectedMosque && (
                <MasjidTiming masjid={selectedMosque} />
            )}

            {/* Sidebar */}
            {isSidebarOpen && (
                <SelectMasjidSidebar
                    onClose={() => onCloseSidebar()}
                    onSelectMosque={handleSelectMosque}
                />
            )}
        </div>
    );
};

export default Home;
