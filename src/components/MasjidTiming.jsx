import PrayerClocks from "./PrayerClocks";

const MasjidTiming = ({ masjid }) => {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <>
      <div className="h-screen-minus-navbar  bg-gray-800 text-white">
        <button onClick={refreshPage} className="bg-sky-500 hover:bg-sky-700 m-2 px-4 float-right">
          X
        </button>

        <div className="flex justify-around items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{masjid.name}</h1>
            <p>Fajr: {masjid.timings.fajr}</p>
            <p>Dhuhr: {masjid.timings.dhuhr}</p>
            <p>Asr: {masjid.timings.asr}</p>
            <p>Maghrib: {masjid.timings.maghrib}</p>
            <p>Isha: {masjid.timings.isha}</p>
          </div>

          <PrayerClocks timings={masjid.timings} />
        </div>
      </div>
    </>
  );
};

export default MasjidTiming;
