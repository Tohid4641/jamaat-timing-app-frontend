import React, { useState } from 'react';
import SelectMosqueSidebar from '../components/SelectMasjidSidebar.jsx';

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
                    style={{ backgroundImage: 'url("/assets/bg.jpg")', opacity:0.7 }}
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
                <div className="h-screen-minus-navbar flex items-center justify-center text-center bg-gray-800 text-white">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{selectedMosque.name}</h1>
                        <p>Fajr: {selectedMosque.timings.fajr}</p>
                        <p>Dhuhr: {selectedMosque.timings.dhuhr}</p>
                        <p>Asr: {selectedMosque.timings.asr}</p>
                        <p>Maghrib: {selectedMosque.timings.maghrib}</p>
                        <p>Isha: {selectedMosque.timings.isha}</p>
                    </div>
                </div>
            )}

            {/* Sidebar */}
            {isSidebarOpen && (
                <SelectMosqueSidebar
                    onClose={() => onCloseSidebar()}
                    onSelectMosque={handleSelectMosque}
                />
            )}
        </div>
    );
};

export default Home;
