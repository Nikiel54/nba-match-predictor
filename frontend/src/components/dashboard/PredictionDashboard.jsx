import Card from "../Card"
import { useState } from "react"
import { TeamSelectionForm } from "./TeamSelectionForm"

export function PredictionDashboard({ team_data }) {
    const [homeTeam, setHomeTeam] = useState(""); // data for filled out fields
    const [awayTeam, setAwayTeam] = useState("");
    const [homeTeamError, setHomeTeamError] = useState(false); // data for incorrectly filled out field states
    const [awayTeamError, setAwayTeamError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <main className="page-body">
            <div className="instructions">
                <h1>Select Teams to Predict the Outcome</h1>
                <em>Choose a home team and an away team to make a prediction</em>
            </div>
            <Card>
                <form action="post" id='dashboard-form'>
                    <TeamSelectionForm
                        team_data={team_data}
                        homeTeam={homeTeam}
                        setHomeTeam={setHomeTeam}
                        awayTeam={awayTeam}
                        setAwayTeam={setAwayTeam}
                        homeTeamError={homeTeamError}
                        awayTeamError={awayTeamError}
                    />
                    <button type="button" className="prediction-button">
                        Generate Prediction
                    </button>
                </form>
            </Card>
        </main>
    )
}