import { useEffect } from "react"
import { BASE_URL } from "./constants";
import axios from "axios";
import { useState } from "react";

const useRegions = (input) => {

    const [regions, setRegions] = useState([])

    useEffect(() => {
        fetchRegions();
    }, [])

    const fetchRegions = async () => {

        try {
            const res = await axios.get(BASE_URL + '/api/user/'+ input);

            setRegions(res?.data?.data)

        } catch (error) {
            console.error(error)
        }
    };

    return regions;
}

export default useRegions