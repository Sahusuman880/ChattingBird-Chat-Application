import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/chat.svg";
import Logout from "./Logout";
function Contact({ contacts, currentUser, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSeleceted, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserName && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h3>ChattingBirds</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSeleceted ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img src={contact.avatarImage} alt="avatar" />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="current-user">
            <div className="avatar">
              <img src={currentUserImage} alt="avatar" />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
            <div>
              <Logout />
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;

  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img {
      height: 2rem;
    }
    h3 {
      color: white;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;

    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.3rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff34;
      min-height: 4rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #9a86f3;
    }
  }
  .current-user {
    background-color: #0d0d30;
    display: flex;

    justify-content: center;
    align-items: center;
    gap: 1rem;
    .avatar {
      img {
        height: 3rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
        font-size: 1rem;
      }
    }
  }
`;
export default Contact;
