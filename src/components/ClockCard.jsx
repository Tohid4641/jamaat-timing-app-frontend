import React, { useState, useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const ClockCard = ({ prayerName, prayerTime }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Parse the prayer time string into a Date object
    const parsePrayerTime = () => {
      const [hours, minutes] = prayerTime.split(/[:\s]/).map(Number);
      const isPM = prayerTime.includes("PM");
      const date = new Date();
      date.setHours(isPM && hours !== 12 ? hours + 12 : hours);
      date.setMinutes(minutes);
      date.setSeconds(0);
      return date;
    };

    setTime(parsePrayerTime());
  }, [prayerTime]);

  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4 shadow-lg bg-white">
      {/* Clock */}
      <Clock className='' value={time} renderNumbers={true} size={120} />
      {/* Prayer Name */}
      <span className="text-xl font-medium mt-4 text-black">{prayerName}</span>
      {/* Prayer Time */}
      <span className="text-sm text-gray-600">{prayerTime}</span>
    </div>
  );
};

export default ClockCard;
