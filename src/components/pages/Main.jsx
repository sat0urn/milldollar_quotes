import BGImage from "/image-canva.png"
import "./Main.css"
import {useState} from "react";
import {pixelsData} from "../../data/pixelsData.js";

const Main = () => {
  const [highlightStyle, setHighlightStyle] = useState({});
  const [tooltip, setTooltip] = useState({display: 'none', top: 0, left: 0, text: ''});

  const areas = pixelsData

  const handleMouseEnter = (title, coords) => {
    const [left, top, width, height] = coords;
    setHighlightStyle({
      display: 'block',
      left: `${left}px`,
      top: `${top}px`,
      width: `${width - left}px`,
      height: `${height - top}px`,
    });

    setTooltip({
      display: 'block',
      top: top + 10,
      left: width,
      text: title,
    });
  };

  const handleMouseLeave = () => {
    setHighlightStyle({display: 'none'});
    setTooltip({display: 'none', top: 0, left: 0, text: ''});
  };

  return (
    <div className="position-relative">
      <img
        src={BGImage}
        alt="Million Dollar Homepage"
        useMap={"#pixel-map"}
        className="img-fluid"
      />
      <map name="pixel-map">
        {areas.map(area => (
          <area
            key={area.id}
            shape="rect"
            coords={area.coords.join(',')}
            href={area.url}
            alt={`Area ${area.id}`}
            onMouseEnter={() => handleMouseEnter(area.title, area.coords)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </map>
      <div className="highlight-overlay" style={highlightStyle}></div>
      <div
        className="custom-tooltip bg-white border border-2 border-info px-2 fw-bold rounded-2"
        style={{
          display: tooltip.display,
          top: tooltip.top,
          left: tooltip.left,
        }}
      >
        {tooltip.text}
      </div>
    </div>
  );
}

export default Main