function User(props){
    console.log(props);
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.class}</h2>
        </div>
    )
}
export default User;