import React from 'react';
import "./simple.css";
import Fade from 'react-reveal/Fade';
import ReadMoreReact from 'read-more-react';

export const FadeExample = ({img, Description, Year}) => { 
    return (
    <div className="containerDiv" key={Year}>
    {img && <Fade bottom>
            <img src={img} className="imagePart" alt="" />
        </Fade> }
    <div className="textContainer">    
    <Fade bottom  >
        <h2 className="year">{Year}</h2>
        <div className="textPart">
        <ReadMoreReact text={Description}
                className="description"
                min={200}
                ideal={240}
                max={280}
            />
        </div>
    </Fade>
    </div>
    </div>
    )
}