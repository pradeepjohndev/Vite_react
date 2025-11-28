import html from './assets/card1.png';
import css from './assets/card2.png';
import js from './assets/card3.png';
import Course from './Course';


function List(){

    const info = [
        {
            name : "html full course",
            price: 200,
            image: html,
            rating: 5
        },{
            name : "css full course",
            price: 200,
            image: css,
            rating: 5
        },{
            name : "js full course",
            price: 250,
            image: js,
            rating: 4
        },{
            name : "js full course",
            price: 250,
            image: js,
            rating: 4
        }
    ]

    info.sort((x,y)=> y.price-x.price)
    /* const filtered = info.filter(x => x.price > 200);
    const filtered = info.filter(x => x.name.toLowerCase().includes("html"));
    const filtered = info.filter(x => x.name.startsWith("css")); */
    const filtered = info.filter(x => x.rating >= 4);

    const courseList = filtered.map(
        (x,index)=>
            (<Course key={index} name={x.name} 
        price={x.price} rating={x.rating} image={x.image}/>));

    return(
        <>
            {courseList}
        </>
    );
}

export default List;