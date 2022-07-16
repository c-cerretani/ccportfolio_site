// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Christopher Cerretani</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:cerretani@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;