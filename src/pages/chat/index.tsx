import React from "react";
import { ChatContainer, ChatInputSection, ChatButton } from "./styled";
import Navigation from "@/components/organisms/Navbar";
import { Input, Textarea } from "@nextui-org/react";
import { SendIcon } from "@/components/atoms/icons/Send";

const Chat = () => {
  return (
    <ChatContainer>
      <Navigation />
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
        <Textarea size='lg' fullWidth placeholder='Type your message...' minRows={1} />
        <ChatButton>
          <SendIcon height={30} width={30} />
        </ChatButton>
      </ChatInputSection>
    </ChatContainer>
  );
};

export default Chat;
