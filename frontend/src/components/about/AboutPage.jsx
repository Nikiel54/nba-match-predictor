import "../../About.css"
import { Link } from "react-router";
import basketballIcon from "../../assets/basketball.png";

export default function AboutPage({ setSelectedPage }) {

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
                <div>
                    <div className="main-img-cont">
                        <img src={basketballIcon} alt="Basketball Icon Website Logo" width="200px" height="200px" />
                    </div>
                </div>
            </section>
            <section id="about-proj-breakdown">
                <strong>Under the Hood</strong>
                <h1>PROJECT <span>BREAKDOWN</span></h1>
                <div className="horiz-divider"></div>
                <section>
                    <div className=""></div>
                    <div></div>
                    <div></div>
                </section>
            </section>
        </>
    )
}