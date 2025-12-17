import { useEffect, useState } from "react";
import { useTopTeams } from "../../customhooks/topTeamsFetching";


export default function TopTeamsDisplay({ teamData }) {
    const [animate, setAnimate] = useState(false);
    const [topTeams, setTopTeams] = useState(null);

    const delays = [0, 0.25, 0.5, 0.75, 1.0];
    const heights = ["8.5em", "10em", "12.5em", "11em", "9em"];
    const width = "3rem";

    // fetch top 5 teams
    const { teamRatings, loading, error } = useTopTeams();

    useEffect(() => {
        if (!teamRatings) return;

        const teamsArray = Object.entries(teamRatings);
        const sortedTopFive = teamsArray
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
        
        sortedTopFive.map((team) => {
            const teamName = teamData.find(teamName => (teamName.id == team[0]))
            team[0] = teamName.name;
        })

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTopTeams(sortedTopFive);
    }, [teamRatings, teamData]);


    // trigger animation
    useEffect(() => {
        if (topTeams) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setAnimate(true);
        }
    }, [topTeams]);


    return (
        <>
            <div className="teams-display-cont">
                {delays.map((delay, i) => (
                    <div key={i}>
                        <div className="empty-bar"></div>
                        <div className= {`team-bar ${animate ? "grow": ""}`}  style={{height: heights[i], width: width, transitionDelay: `${delay}s`}}></div>
                    </div>
                ))}
            </div>
            {topTeams && 
                <div className="teams-display-names">
                    {topTeams.map((team, i) => (
                        <p key={i}>
                            {team[0].split(' ')[1]}
                        </p>
                    ))}
                </div>
            }
        </>
    )
}