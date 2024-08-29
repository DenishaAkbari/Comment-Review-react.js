import React from 'react';

const StarRating = ({ rating, setRating }) => {
    const [hover, setHover] = React.useState(0);

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button  type="button"  key={index} className={index <= (hover || rating) ? "on" : "off"} onClick={() => setRating(index)}  
                        style={{backgroundColor: "transparent", border: "none", cursor: "pointer",  fontSize: "2rem", color: index <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                        }}
                    >
                        <span>&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};

export default StarRating;
