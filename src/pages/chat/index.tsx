import React, { useEffect, useState } from "react";
import {
  ChatContainer,
  ChatInputSection,
  ChatButton,
  ChatBodyContainer,
  MessageContainer,
  Message,
} from "./styled";
import Navigation from "@/components/organisms/Navbar";
import { Input, Textarea } from "@nextui-org/react";
import { SendIcon } from "@/components/atoms/icons/Send";
import ScrollToBottom from "react-scroll-to-bottom";
import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client";

// @ts-ignore
const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const removeDuplicatesFromMessageList = () => {
    const uniqueMessageList = messageList.filter((message, index) => {
      // @ts-ignore
      return messageList.findIndex((messageItem) => messageItem.id === message.id) === index;
    });
    return uniqueMessageList;
  };

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        id: uuidv4(),
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      // @ts-ignore
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    // @ts-ignore
    socket?.on("receive_message", (data) => {
      // @ts-ignore
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
  return (
    <ChatContainer>
      <Navigation />
      <ChatBodyContainer>
        <ScrollToBottom>
          {removeDuplicatesFromMessageList().map((message) => (
            // @ts-ignore
            <MessageContainer
              // @ts-ignore
              key={message.id}
              className={
                // @ts-ignore
                message.author === username ? "sent" : "received"
              }>
              <Message
                className={
                  // @ts-ignore
                  message.author === username ? "sent" : "received"
                }>
                {/* @ts-ignore */}
                {message.message}
              </Message>
            </MessageContainer>
          ))}
          {/* <MessageContainer className='sent'>
            <Message className='sent'>Hello</Message>
          </MessageContainer> */}
        </ScrollToBottom>
      </ChatBodyContainer>
      <ChatInputSection>
        {/* <Input
          fullWidth
          size='lg'
          contentRightStyling={false}
          placeholder='Type your message...'
          contentRight={
            <ChatButton>
              <SendIcon height={25} width={25} />
            </ChatButton>
          }
        /> */}
        <Textarea
          value={currentMessage}
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
          size='lg'
          fullWidth
          placeholder='Type your message...'
          minRows={1}
        />
        <ChatButton onClick={sendMessage}>
          <SendIcon height={30} width={30} />
        </ChatButton>
      </ChatInputSection>
    </ChatContainer>
  );
};

export default Chat;
