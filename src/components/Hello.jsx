 import './Hello.css';
 
 const Hello=(props)=> {
    //javascript code
    console.log(props);
    
    return (
        <h1 className="header">Hello {props.name}!</h1>
    )
 }
 export default Hello;