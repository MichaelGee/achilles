import React, { useContext } from "react";
import {
  ChatContainer,
  ChatInputSection,
  ChatButton,
  ChatBodyContainer,
  MessageContainer,
  Message,
} from "./styled";
import Navigation from "@/components/organisms/Navbar";
import { Textarea, Text } from "@nextui-org/react";
import { SendIcon } from "@/components/atoms/icons/Send";
import ScrollToBottom from "@/components/organisms/ScrollToBottom";
import { withProtectedRoute } from "@/pages/protectedroute";

const Chat = () => {
  return (
    <ChatContainer>
      <Navigation />
      <ChatBodyContainer>
        <ScrollToBottom>
          <Text size='$md' color='#9ba1a6' css={{ textAlign: "center", marginRight: "2.5rem" }}>
            Chat starts here
          </Text>
          <MessageContainer className='sent'>
            <Message className='sent'>Hello</Message>
          </MessageContainer>
          <MessageContainer className='received'>
            <Message className='received'>
              This information is to be recorded to imporove customer service satisfaction.
            </Message>
          </MessageContainer>
        </ScrollToBottom>
      </ChatBodyContainer>
      <ChatInputSection>
        <Textarea size='lg' fullWidth placeholder='Type your message...' minRows={1} />
        <ChatButton>
          <SendIcon height={30} width={30} />
        </ChatButton>
      </ChatInputSection>
    </ChatContainer>
  );
};

export default withProtectedRoute(Chat);
