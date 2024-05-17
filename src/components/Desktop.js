import FrameComponent from "../components/FrameComponent";
import "./Desktop.css";
import { Link } from 'react-router-dom';
const Desktop = () => {
  return (
    <div className="desktop-2" style={{ fontFamily: 'monospace' }}>
      <main className="rectangle-parent">
        <div className="frame-child" />
        <div className="frame-item">
        <Link to="/" className="button">Home</Link>
        <Link to="/login" className="button">Login</Link>
        <Link to="/register" className="button">SignUp</Link>
        </div>
        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
        <img
          className="frame-inner"
          loading="lazy"
          alt=""
          src="/ellipse-6@2x.png"
        />
        <img
          className="ellipse-icon"
          loading="lazy"
          alt=""
          src="/ellipse-7@2x.png"
        />
      </main>
      <div className="frame-parent">
        <div className="connect-with-like-minded-profe-wrapper">
          <h1 className="connect-with-like-minded">Connect with Like-Minded Professionals & Collaborate on Your Next Project with Ease</h1>
        </div>
        <div className="frame-group">
          <div className="frame-container">
            <div className="rectangle-group">
              <div className="rectangle-div" />
              <div className="back">Back</div>
            </div>
            <div className="frame-wrapper">
              <div className="vector-parent">
                <img
                  className="vector-icon"
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
                <h3 className="can-you-help">Can you help?</h3>
              </div>
            </div>
          </div>
          <div className="frame-div">
            <div className="vector-group">
              <img
                className="frame-child1"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
              <h3 className="yes-i-can">Yes, I can</h3>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent />
      <video controls className="video-player">
        <source src="/your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Desktop;