const UpdateMasjidTimingForAdmin = () => {
  return (
    <section
      id="registerMasjid"
      className="h-screen-minus-navbar bg-slate-300 flex items-center justify-center"
    >
      <form
        id="registerMasjidForm"
        action=""
        className="px-16 py-16 sencond-bg-color rounded-md drop-shadow-lg"
      >
        <h1 className="text-white font-bold text-xl text-center mb-2">
          Register Masjid
        </h1>
        <input
          type="text"
          placeholder="Search mosque"
          value={"search"}
          className="w-full mb-4 px-3 py-2 text-gray-900 rounded"
        />
        <select
          value="country"
          className="block w-full px-3 py-2 mb-4 text-gray-900 rounded"
          form="registerMasjidForm"
          required
        >
          <option value="">Select Country</option>
          <option value="india">India</option>
        </select>
        <select
          value="state"
          className="block w-full px-3 py-2 mb-4 text-gray-900 rounded"
          form="registerMasjidForm"
          required
        >
          <option value="">Select State</option>
          <option value="maharashtra">Maharashtra</option>
        </select>
        <select
          value="city"
          className="block w-full px-3 py-2 mb-4 text-gray-900 rounded"
          form="registerMasjidForm"
          required
        >
          <option value="">Select City</option>
          <option value="nanded">Nanded</option>
        </select>

        <input
          type="submit"
          value="Register"
          className="w-full p-2 border first-bg-color hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:ring-1 drop-shadow-lg"
        />
      </form>
    </section>
  );
};

export default UpdateMasjidTimingForAdmin;