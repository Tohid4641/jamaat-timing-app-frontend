// src/components/PrayerClocks.jsx
import React from "react";
import ClockCard from "./ClockCard";

const PrayerClocks = ({ timings }) => {
  const prayers = [
    { name: "Fajr", time: timings.fajr },
    { name: "Dhuhr", time: timings.dhuhr },
    { name: "Asr", time: timings.asr },
    { name: "Maghrib", time: timings.maghrib },
    { name: "Isha", time: timings.isha },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Prayer Timings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {prayers.map((prayer, index) => (
          <ClockCard
            key={index}
            prayerName={prayer.name}
            prayerTime={prayer.time}
          />
        ))}
      </div>
    </div>
  );
};

export default PrayerClocks;
