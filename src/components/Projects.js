// Import Assets
import frenchimp from '../assets/frenchimp.png';
import scratchgame from '../assets/scratchgame.png';
import codepen from '../assets/codepen.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

            <div className="projects__card">
                    <h3>Project Fren-Chimp</h3>
                    <img src={frenchimp} alt="Frenchimp Landing Page" />
                    <p>Project Fren-Chimp is a web3 art project utilizing ERC-721 smart contracts writen in Solidity, the Ethereum blockchain and the Inter-Planetary File System(IFPS)
                    </p>

                    <a href="https://project-fren-chimp.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coffeeandblunt" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Scratch Game</h3>
                    <img src={scratchgame} alt="Scratch banana game" />
                    <p>Banana Chimp is a game a coded in Scratch. More levels coming soon! All code, artwork and sound effects are original and done by me.
                    </p>

                    <a href="https://scratch.mit.edu/projects/711632905" target="_blank" className="button">Site</a>
                    <a href="https://scratch.mit.edu/projects/711632905/editor/" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Codepen</h3>
                    <img src={codepen} alt="Christopher Cerretani codepen" />
                    <p>
                        This is my codepen. Although I have been creating and maintaining websites for years, 
                        these are the first websites I coded from scratch.
                    </p>

                    <a href="https://codepen.io/cerretani" target="_blank" className="button">Site</a>
                    <a href="https://codepen.io/cerretani/pen/vYeRPaj" target="_blank" className="button">Code</a>
                </div>

            </div>
        </section>
    );
}

export default Projects;
