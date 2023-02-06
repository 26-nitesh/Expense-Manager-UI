const NotLogin = (props)=>{

    return(
        <h2>You are not authorized ....Please <a href="login"> Login</a> First to go to your {props.page} page</h2>
    )
}

export default NotLogin