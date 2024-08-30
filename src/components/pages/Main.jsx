import BGImage from "/image-canva.png"
import "./Main.css"
import {useState} from "react";

const Main = () => {
  const [highlightStyle, setHighlightStyle] = useState({});
  const [tooltip, setTooltip] = useState({display: 'none', top: 0, left: 0, text: ''});

  const areas = [
    {id: 1, coords: [0, 0, 20, 40], title: 'Saturn eating his son', url: '#1'},
    {id: 2, coords: [20, 0, 100, 80], title: 'La Ruche Bee - the best cybersport team', url: '#2'},
    {id: 3, coords: [0, 40, 20, 60], title: 'The Talos Principle', url: '#3'},
    {id: 4, coords: [0, 60, 20, 80], title: 'Lucifer watching sins', url: '#4'},
    {id: 5, coords: [100, 0, 220, 160], title: 'Evangelion girl', url: '#5'},
    {id: 6, coords: [0, 80, 100, 160], title: 'Evangelion boy', url: '#6'},
    {id: 7, coords: [220, 0, 620, 160], title: 'Страна самоцветов - ГГ аниме', url: '#7'},
  ];

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
    setTooltip({ display: 'none', top: 0, left: 0, text: '' });
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