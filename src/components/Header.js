// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Christopher Cerretani" />

            <div className='header__content'>
                <h1>Christopher Cerretani</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:cerretani@gmail.com" className='button'>Get In Touch</a>
            </div>

            <div>
                    <body>
           
            <iframe title="My Scratch Game" src="https://scratch.mit.edu/projects/711632905/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
            
            </body>
            </div>  
            
        </section>
    );
}

export default Header;
