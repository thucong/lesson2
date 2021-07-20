import Avatar from "./Avatar";

function UserInfo(props){
    return (
        <div className="UserInfor">
            <Avatar user= {props.user} />
            <div className="UserInfo-name">
                <h1>{props.user.name}</h1>
            </div>
        </div>
    )
}
export default UserInfo