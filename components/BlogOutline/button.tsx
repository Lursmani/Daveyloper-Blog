import React, {useState} from 'react';
import s from "./BlogButton.module.css";

const Button = (props: any) => {
    const [hover, setHover] = useState(false)


  return (
    <div className={s.border} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className={hover ? s.contentHov : s.contentNoHov} >
                <a className={s.link} href={props.link}>{props.text}</a>
            </div>
        </div>
  );

}

export default Button;
