import { useEffect } from "react"
import { BASE_URL } from "./constants";
import axios from "axios";
import { useState } from "react";

const useMasjids = () => {

    const [masjids, setMasjids] = useState([])

    useEffect(() => {
        fetchMasjids();
    }, [])

    const fetchMasjids = async () => {

        try {
            const res = await axios.get(BASE_URL + '/api/user/masjids');

            setMasjids(res?.data?.data)

        } catch (error) {
            console.error(error)
        }
    };

    return masjids;
}

export default useMasjids