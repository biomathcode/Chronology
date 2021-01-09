import React from 'react';
import "./simple.css";
import Fade from 'react-reveal/Fade';
import ReadMoreReact from 'read-more-react';

export const FadeExample = ({img, Description, Year}) => {
    return (
        <div className="containerDiv" key={Year}>
            <Fade bottom>
                <img src={img} className="imagePart" alt="" />
            </Fade>
            <Fade bottom >
                {/* <ReadMoreReact
                className="textPart"
                text={Description}
                min={100}
                ideal={120}
                max={200}
                readMoreText="Read more"
                /> */}
                <p className="textPart">
                    {Description}
                </p>
  
            </Fade>
        </div>
    )
}