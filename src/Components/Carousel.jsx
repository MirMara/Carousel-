import React from 'react';
import {useRef} from 'react';
import styles from "./Carousel.css"; 


function Carousel () {
    const ref = (element, direction) => {
        if (direction === "left") element.current.scrollLeft += 300;
        if (direction === "right") element.current.scrollLeft -= 300;
    }
    const pics = useRef();

    return(
        <div className="body" >
            <h1 className="title"> Amazing Pics</h1>
            <div className="pics" ref={pics}>
                <div className="img">
                    <div className="imgRef">
                        <img src="https://picsum.photos/id/106/250/300" alt="1" ></img>
                        <img src="https://picsum.photos/200/300" alt="2" ></img>
                        <img src="https://picsum.photos/id/237/200/300" alt="3" ></img>
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="4" ></img>
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="5" ></img>
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="6" ></img>
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="7" ></img>
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="8" ></img>
                    </div>
                </div>
            </div>
            <div className="btn">
                <button className="btns" onClick={() => ref(pics, "right") }>{"<"}</button>
                <button className="btns"onClick={() => ref(pics, "left") }>{">"}</button>

            </div>
        </div>
    )
}

  

export default Carousel; 