import "../../About.css"
import { Link } from "react-router";
import TopTeamsDisplay from "./TopTeams";

export default function AboutPage({ setSelectedPage, teamData }) {

    return (
        <>
            <section id="about-desc-section">
                <div>
                    <h1>About This Project</h1>
                    <p>An ELO modelling system was created to accurately
                        judge team strengths and weaknesses, revealing
                        predicted outcomes of head-to-head matchups. This
                        project took inspiration from machine
                        learning models and classification.
                    </p>
                    <div>
                        <Link to='/' id="link-to-predictor-btn" onClick={() => (setSelectedPage("Dashboard"))}>
                            Try out the Predictor!
                        </Link>
                    </div>
                </div>
                <div id="top-teams-display">
                    <TopTeamsDisplay teamData={teamData} />
                </div>
            </section>
            <section id="about-proj-breakdown">
                <strong>Under the Hood</strong>
                <h1>PROJECT <span>BREAKDOWN</span></h1>
                <div className="horiz-divider"></div>
                <section className="proj-desc-cont">
                    <div>
                        <div>

                        </div>
                        <h2>DATA SOURCES</h2>
                        <p>
                            The initial data was collated from kaggle datasets 
                            to train the model on a recent 40+ years of NBA history, 
                            accompanied with the unofficial <a href="">NBA stats api</a>,
                            to pull live data daily, which keeps the model up to date.
                        </p>
                    </div>
                    <div>
                        <div>

                        </div>
                        <h2>THE MODEL</h2>
                        <p>
                            The model itself is similar to logistic regression 
                            and binary classification. Instead, I took inspiration 
                            from sports analytics models and created an ELO system which 
                            judges teams numerically based on a rating which stands for 
                            their overall strength. 
                        </p>
                    </div>
                    <div>
                        <div>

                        </div>
                        <h2>TECHNOLOGIES</h2>
                        <p>
                            This site was created with React.js on the frontend and FastAPI on the backend.
                            It serves to be a student portfolio project to see how far one can get
                            trying to make predictions, without direct machine learning. 
                        </p>
                    </div>
                </section>
            </section>
        </>
    )
}