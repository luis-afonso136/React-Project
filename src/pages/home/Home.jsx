import TypewriterText from '../../components/typeWriter/typeWriter';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="jumping-text">Welcome to RetroPixel</h1>
            <p><TypewriterText text='Your ultimate destination for classic pixel games!'/></p>
            <div className="feature-card">
                <h2>Featured Games</h2>
                <p>Explore our collection of retro pixel games like Pac-Man, Tetris, and more!</p>
            </div>
        </div>
    );
};

export default Home;
