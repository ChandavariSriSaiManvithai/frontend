import react from 'react';
function Counter(){
 const [count,setCount]=react.useState(0)
 return(
    <div className='abc'>
        <h1>count:{count}</h1>
    </div>
 )
}
export default Counter;