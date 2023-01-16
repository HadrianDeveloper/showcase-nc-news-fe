import s from '../css/CardOfUname.module.css';
import { useSpring, animated as a } from "react-spring";
import { useState } from "react";

export default function CardOfUname() {

    const [flipped, setFlipped] = useState(false)
    const {transform, opacity} = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: {mass: 5, tension: 500, friction: 80},
    })
    
    const onCardClick = () => {
      console.log('Card Clicked')
    }
  
    return (
    <div className={s.cards}>
        <div className={s.card} onClick={onCardClick}>
            <a.div
            className={s.back}
            style={{
                opacity: opacity.to(o => 1 - o),
                transform,
            }}
            />
            <a.div
            className={s.front}
            style={{
                opacity,
                transform: transform.to(t => `${t} rotateX(180deg)`),
                background: '#645394',
            }}
            />
        </div>
      </div>
    )
  }