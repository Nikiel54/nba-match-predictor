
export function TeamSelectionForm({
    team_data, 
    homeTeam, 
    setHomeTeam, 
    awayTeam, 
    setAwayTeam, 
    homeTeamError, 
    awayTeamError,
}) {
    return (
        <>
            <div>
                <label>
                    Home Team
                    <button type="button" className="selection-btn">
                        <select
                            name="Home Team"
                            value={homeTeam === "" ? "" : homeTeam.name}
                            onChange={(e) => (
                                setHomeTeam(
                                    team_data.find((team) => team.name === e.target.value)
                                )
                            )}>
                            <option key="0" value="">Select a team</option>
                            {team_data.map((team) => {
                                return (
                                    <option key={team.id} value={team.name}>{team.name}</option>
                                )
                            })}
                        </select>
                    </button>
                </label>
                {homeTeamError &&
                    <strong className="error-txt">Missing Home Team!</strong>
                }
            </div>
            <div>
                <label>
                    Away Team
                    <button type="button" className="selection-btn">
                        <select
                            name="Away Team"
                            value={awayTeam === "" ? "" : awayTeam.name}
                            onChange={(e) => (
                                setAwayTeam(
                                    team_data.find((team) => team.name === e.target.value)
                                )
                            )}>
                            <option key="0" value="">Select a team</option>
                            {team_data.map((team) => {
                                return (
                                    <option key={team.id} value={team.name}>{team.name}</option>
                                )
                            })}
                        </select>
                    </button>
                </label>
                {awayTeamError &&
                    <strong className="error-txt">Missing Away Team!</strong>
                }
            </div>
        </>
                    
    )
}