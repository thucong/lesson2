
import UserInfo from "./UserInfo";

function formatDate(date) {
    return date.toLocaleDateString();
}
function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <UserInfo user= {props.author} />
                <div className="Comment-text">
                    <h2>{props.text}</h2>
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        </div>
    )
}
export default Comment;