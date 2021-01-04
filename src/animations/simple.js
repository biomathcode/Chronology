import {useSpring, animated} from 'react-spring'
import "./simple.css"
import GandhiImage from '../images/Gandhi.jpg'

export const SimpleAnimation = () => {
    const toggleFade = useSpring({
        from: {opacity: 0},
        to: {opacity: 1}
      })
    const toggleTransform = useSpring({
        from: {
            transform: 'translate3d(0,-50px,0)',
            opacity: 0
        },
        to: {
            transform: 'translate3d(0,0,0)',
            opacity: 1
        }
    })
    return (
        <animated.div className="containerDiv">
          <animated.img src={GandhiImage} style={toggleTransform} className="imagePart" alt="gandhi_image"/>
          <animated.div style={toggleTransform} className="textPart">
            On October 2 in the small principality of Porbandar, Gujarat Province (Northwest India), Mohandas Karamchand Gandhi was born third son to a wealthy Hindu family.His father, Karamchand Gandhi, was a high-ranking official of the regional government.
          </animated.div>
            
        </animated.div>
    )
}

