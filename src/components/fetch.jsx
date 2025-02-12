import { Component } from "react"


class Fetch extends Component{
    constructor(){
        super()
        this.state={
            data:[]

        }
    }
  componentDidMount(){
    console.log("mounting")
     fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>this.setState({data}))
  }

render(){
    console.log("render")
    return(<>
    <h1>Mounting</h1>
    {
    this.state.data.map((val,idx)=>{
        return(
       <div style={{border:"2px,solid Black",marginBlock:"20px"}} key={idx}>
        <div>
       <img src={val.image} alt="image" height={"200px"} width={"200px"}></img>
       </div>
       <div>
       <h1>{val.title}</h1>
       <h2>{val.price}</h2>
       <p>{val.description}</p>
       </div>
       </div>)

    })}
    <div>

    </div>
    </>)
}
}
export default Fetch 