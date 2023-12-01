import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  const {
    user: { name, image, handle },
    timestamp,
    message,
  } = tweet;

  return (
    <div className="tweet">
      <ProfileImage profileimg={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />

          <Timestamp timestamp={timestamp} />
        </div>
        <Message tweetMessage={message} />
 
        <Actions />
      
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
