

const Props = (props) =>{
    const shoot = () =>{
        alert("Great shot")
    }
    // usng argument
    const shot = (a) =>{
        alert(a)
    }
    return(
        <div>
            {props.name}
            <button onClick={shoot}>Taka a shot!!</button>
            <button onClick = {()=> shot('Goal')}>Tak a shoot!!</button>
            <p>{props.brand}</p>
        </div>
    )
}

export default Props;