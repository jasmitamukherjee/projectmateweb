import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserChat = ({ item, userId }) => {
  const [messages, setMessages] = useState([]);

  const getLastMessage = () => {
    const n = messages.length;
    return messages[n - 1];
  };
  const lastMessage = getLastMessage();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const senderId = userId;
      const receiverId = item?._id;
      const response = await axios.get("http://192.168.1.5:4000/messages", {
        params: { senderId, receiverId },
      });

      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handlePress = () => {
    // console.log(item?.name)
    const state = {
      image: item?.projectImages[0],
      name: item?.name,
      receiverId: item?._id,
      senderId: userId,
    };
    
    const queryString = new URLSearchParams(state).toString();
    window.location.replace(`/chat/chatroom?${queryString}`);
  };

  return (
    <div
      onClick={handlePress}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginVertical: 12,
      }}
    >
      <div>
        {/* <img
          style={{ width: 60, height: 60, borderRadius: 35 }}
          src={item?.projectImages[0]}
          alt="Profile"
        /> */}
      </div>
      <div style={{marginTop:30,backgroundColor:"#f0f0f0",width:600,borderRadius:30}}>
        <p style={{
          fontWeight: "bold",
          color: "#662c65",
          fontSize: 15,
          fontFamily: "monospace",
          marginLeft:15,
          marginTop:5
        }}>
          {item?.name}
        </p>
        <p style={{
          fontSize: 15,
          fontWeight: "500",
          marginTop: 6,
          fontFamily: "monospace",
          marginLeft:15
        }}>
          {lastMessage ? lastMessage?.message : `Start Chat with ${item?.name}`}
        </p>
      </div>
    </div>
  );
};

export default UserChat;
