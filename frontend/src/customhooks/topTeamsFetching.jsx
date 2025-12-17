import { useEffect, useState } from "react";

// This custom hook handles pulling all team ratings from the server,
// validation and filtering is left out.
export const useTopTeams = () => {
    const [teamRatings, setTeamRatings] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const serverBaseUrl = import.meta.env.VITE_SERVER_APIS_BASE_URL;
    const topTeamsUrl = `${serverBaseUrl}ratings`;

    useEffect(() => {
        const fetchTopTeams = async () => {
            try {
                setLoading(true);

                const response = await fetch(topTeamsUrl);

                if (!response.ok) {
                    throw new Error(`Error in loading team ratings: ${response.status}`);
                }

                const allTeamRatings = await response.json();
                setTeamRatings(allTeamRatings);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchTopTeams();
    }, [topTeamsUrl])

    return { teamRatings, loading, error };
}