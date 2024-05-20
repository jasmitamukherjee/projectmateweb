import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <footer className="desktop-2-inner">
      <div className="frame-parent1">
        <div className="why-choose-us-wrapper">
          <div style={{marginTop:"10px",marginBottom:"30px"}} >WHY CHOOSE US?</div>
        </div>
        <div className="frame-parent2">
          <div className="rectangle-container">
            <div className="frame-child2" />
            <div className="ellipse-parent">
              <div className="ellipse-div" />
              <h1 className="b">B</h1>
            </div>
            <div className="testimonial">
              I found my startup co-founder through this website
            </div>
          </div>
          <div className="rectangle-parent1">
            <div className="frame-child3" />
            <div className="frame-wrapper1">
              <div className="ellipse-group">
                <div className="frame-child4" />
                <h1 className="d">D</h1>
              </div>
            </div>
            <div className="testimonial">
              Found my partner through this website
            </div>
          </div>
          <div className="rectangle-parent2">
            <div className="frame-child5" />
            <div className="ellipse-container">
              <div className="frame-child6" />
              <h1 className="r">R</h1>
            </div>
            <div className="testimonial">
              Found a developer for my website through here
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
