import React, { useState } from "react";
import { connect } from "react-redux";
import { SendOutlined } from "@ant-design/icons";
import { fetchMessFromUserToUser, insertMsg } from "../../ducks/message";
import { MainContainer2, ChatBox, MessageBar } from "./styles";

function ChatComponent() {
  const [message, setMessage] = useState("");

  const handleMsgSend = () => {
    console.log("a");
  };

  return (
    <MainContainer2>
      <ChatBox></ChatBox>
      <MessageBar>
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <div onClick={handleMsgSend}>
          <SendOutlined />
        </div>
      </MessageBar>
    </MainContainer2>
  );
}

export default connect(null, null)(ChatComponent);
