import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { SendOutlined } from "@ant-design/icons";
import moment from "moment";
import { fetchMessFromUserToUser, insertMsg } from "../../ducks/message";
import { MainContainer2, ChatBox, MessageBar, MsgContainer } from "./styles";

const mapStateToProps = (state) => {
  return {
    loggedUser: state.loggedUser,
    selectedUser: state.selectedUser,
    messFromUserToUser: state.messFromUserToUser,
  };
};

function ChatComponent(props) {
  const [message, setMessage] = useState("");
  const [fetch, setFetch] = useState(0);

  useEffect(() => {
    props.fetchMessFromUserToUser(props.selectedUser._id, props.loggedUser._id);
  }, [props.selectedUser, fetch]);

  const handleMsgSend = () => {
    if (message.length === 0) {
      return;
    }
    if (Object.entries(props.messFromUserToUser).length === 0) {
      return;
    }
    props
      .insertMsg(props.selectedUser._id, props.loggedUser._id, message)
      .then((resp) => {
        if (resp) {
          let cont = fetch;
          setFetch(cont + 1);
        }
      });
  };

  return (
    <>
      <MainContainer2>
        <ChatBox>
          {Object.entries(props.messFromUserToUser).length === 0 ? null : (
            <>
              {props.messFromUserToUser.data.map((mess) => {
                return (
                  <MsgContainer key={mess._id}>
                    <h2>{mess.body}</h2>
                    <p>{moment(mess.date).utc().format("HH:mm")}</p>
                  </MsgContainer>
                );
              })}
            </>
          )}
        </ChatBox>
        <MessageBar>
          <input
            type="text"
            value={message}
            placeholder="Write a message if you want"
            onChange={(event) => setMessage(event.target.value)}
          />
          <div onClick={handleMsgSend}>
            <SendOutlined />
          </div>
        </MessageBar>
      </MainContainer2>
    </>
  );
}

export default connect(mapStateToProps, {
  insertMsg,
  fetchMessFromUserToUser,
})(ChatComponent);
