import React, { useState } from 'react';

const mockMosques = [
  { id: 1, name: 'Al-Masjid Al-Haram', country: 'Saudi Arabia', city: 'Mecca', timings: { fajr: '5:00 AM', dhuhr: '12:30 PM', asr: '4:00 PM', maghrib: '6:30 PM', isha: '8:00 PM' } },
  { id: 2, name: 'Al-Masjid An-Nabawi', country: 'Saudi Arabia', city: 'Medina', timings: { fajr: '5:10 AM', dhuhr: '12:40 PM', asr: '4:10 PM', maghrib: '6:40 PM', isha: '8:10 PM' } },
];

const SelectMosqueSidebar = ({ onClose, onSelectMosque }) => {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const filteredMosques = mockMosques.filter(
    (mosque) =>
      mosque.name.toLowerCase().includes(search.toLowerCase()) &&
      (country ? mosque.country === country : true) &&
      (city ? mosque.city === city : true)
  );

  return (
    <div className="fixed top-0 left-0 h-full w-80 bg-gray-800 first-bg-color text-white shadow-lg z-50">
      <button
        className="text-white absolute top-4 right-4"
        onClick={onClose}
      >
        ✕
      </button>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Select Mosque</h2>
        {/* Search */}
        <input
          type="text"
          placeholder="Search mosque"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-4 px-3 py-2 text-gray-900 rounded"
        />
        {/* Filters */}
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full mb-4 px-3 py-2 text-gray-900 rounded"
        >
          <option value="">Select Country</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
        </select>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full mb-4 px-3 py-2 text-gray-900 rounded"
        >
          <option value="">Select City</option>
          <option value="Mecca">Mecca</option>
          <option value="Medina">Medina</option>
        </select>
        {/* Mosque List */}
        <ul className="space-y-2">
          {filteredMosques.map((mosque) => (
            <li key={mosque.id}>
              <button
                className="w-full text-left p-2 hover:bg-gray-600 rounded"
                onClick={() => onSelectMosque(mosque)}
              >
                {mosque.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectMosqueSidebar;
