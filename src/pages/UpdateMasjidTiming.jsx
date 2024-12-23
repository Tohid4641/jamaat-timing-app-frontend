const UpdateMasjidTiming = () => {
  return (
    <section id="registerMasjid" className="h-screen-minus-navbar bg-slate-300 flex items-center justify-center">
      <form id="registerMasjidForm" encType="multipart/form-data" action="" className="p-8 sencond-bg-color rounded-sm drop-shadow-lg">
        <h1 className="text-white font-bold text-xl">Update Masjid Timing</h1>
        <select
          value="country"
          className="block w-full mt-4 px-3 py-2 mb-4 text-gray-900 rounded"
          form="registerMasjidForm"
          required
        >
          <option value="">Select Masjid</option>
          <option value="al-haram">Masjid Al Haram</option>
        </select>
        
        <label htmlFor="timesheet" className="text-white text-sm block mb-2">Upload your masjid timesheet</label>
        <input type="file" className="block mb-8" name="timesheet" id="timesheet" />


        <input type="submit" value="Submit" className="p-2 border first-bg-color hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:ring-1 drop-shadow-lg" />
      </form>
    </section>
  )
}

export default UpdateMasjidTiming