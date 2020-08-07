import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { SendOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
import { fetchMessFromUserToUser, insertMsg } from "../../ducks/message";
import {
  MainContainer2,
  ChatBox,
  MessageBar,
  MsgContainer,
  Aux,
} from "./styles";

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
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (Object.entries(props.selectedUser).length !== 0) {
      props.fetchMessFromUserToUser(
        props.selectedUser._id,
        props.loggedUser._id,
        page
      );
    }
  }, [props.selectedUser, fetch, page]);

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
          setMessage("");
        }
      });
  };

  const handleMessType = (mess) => {
    if (mess.fromUser === props.loggedUser._id) {
      return "true";
    } else {
      return "false";
    }
  };

  const handleDeleteMess = (mess) => {
    console.log(mess);
  };

  return (
    <>
      <MainContainer2>
        <ChatBox>
          {Object.entries(props.messFromUserToUser).length === 0 ? null : (
            <>
              {props.messFromUserToUser.messages.map((mess) => {
                return (
                  <Aux from={handleMessType(mess)} key={mess._id}>
                    <MsgContainer from={handleMessType(mess)}>
                      <h2>{mess.body}</h2>
                      <p>{moment(mess.date).utc().format("HH:mm")}</p>
                    </MsgContainer>
                    <div>
                      <DeleteOutlined onClick={() => handleDeleteMess(mess)} />
                    </div>
                  </Aux>
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
