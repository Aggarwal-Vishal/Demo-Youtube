import { USER_ICON } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm">
      <img className="h-8 " alt="user-icon" src={USER_ICON} />
      <span className="p-2 font-bold">{name}</span>

      <span>{message}</span>
    </div>
  );
};
export default ChatMessage;
