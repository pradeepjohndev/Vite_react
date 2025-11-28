/* import styles from './Course_style.css' */
import './Folder/Course_style.css'
/* import photo from './assets/card1.png' */
import PropTypes from 'prop-types';


/* const course_1 = "html" */
function Course(props){

    function buy(discount){
        console.log("purchase", props.name , "with discount" , discount)
    }

/*  if(props.show){ */
    return(
        props.name && <div className="card"/* style={style} */>
        <img src={props.image}/>
        <h1>{props.name}</h1>
        <p>{props.price}</p>
        <span>{props.rate}</span>
        <button onClick={()=>buy(20)}>Buy</button>
    </div>
)
/* }
else{
    return(
        <div className='card'>Course not available</div>
    )
} */

/* const style ={
    backgroundColor : "green",
} */
}

/* Course.defaultProps ={
name: "Html beginner",
price : "50% discount",
image: photo,
rate : "5"
} */


Course.PropTypes ={
name : PropTypes.string,
price : PropTypes.number,
show : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Course