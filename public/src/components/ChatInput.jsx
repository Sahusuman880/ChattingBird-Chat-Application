import React, { useState } from "react";
import styled from "styled-components";

import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";

function ChatInput({ handleSendMsg }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setmsg] = useState("");
  const hanleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  const hanleEmojiClick = (emoji, event) => {
    let message = msg;
    message += emoji.emoji;
    setmsg(message);
  };
  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setmsg("");
    }
  };
  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={hanleEmojiPicker} />
          {showEmojiPicker && (
            <EmojiPicker
              height={400}
              width={300}
              onEmojiClick={hanleEmojiClick}
              theme="dark"
            />
          )}
        </div>
      </div>
      <form
        className="input-container"
        onSubmit={(e) => {
          sendChat(e);
        }}
      >
        <input
          type="text"
          placeholder="Type your message here"
          value={msg}
          onChange={(e) => setmsg(e.target.value)}
        />
        <button className="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  align-items: center;

  padding: 0.2rem;
  margin: 0 2rem;
  padding-bottom: 0.3rem;
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }

      .EmojiPickerReact {
        position: absolute;
        top: -420px;
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9186f3;

        .emoji-catagories {
          button {
            filter: contrast(0);
          }
        }
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      &::selection {
        background-color: #9186f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9a86f3;
      border: none;
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
export default ChatInput;
