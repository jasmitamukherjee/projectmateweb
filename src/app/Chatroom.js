import React,{ useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import { io } from "socket.io-client";
  import axios from "axios";
import Tabs from './Tabs'

export default function Chatroom() {
  const { search } = useLocation(); // Access search string from URL

  const queryParams = new URLSearchParams(search); // Create URLSearchParams object

  const senderId = queryParams.get('senderId'); // Get senderId from URL parameter
  const receiverId = queryParams.get('receiverId'); // Get receiverId from URL parameter
const name = queryParams.get('name');
  //   const [message, setMessage] = useState("");
  //   const [messages, setMessages] = useState([]);
  //   const [selectedMessages, setSelectedMessages] = useState([]);
  //   const socket = io("http://192.168.0.4:8000");
  //   socket.on("connect", () => {
  //     console.log("Connected to the Socket.IO server");
  //   });
  //   socket.on("receiveMessage", (newMessage) => {
  //     console.log("new Message", newMessage);
  
  //     //update the state to include new message
  //     setMessages((prevMessages) => [...prevMessages, newMessage]);
  //   });
  //   const sendMessage = async (senderId, receiverId) => {
  //     // console.log("trying to send")
  //     // console.log(message)
  //     socket.emit("sendMessage", { senderId, receiverId, message });
  
  //     setMessage("");
  
  //     // call the fetchMessages() function to see the UI update
  //     setTimeout(() => {
  //         fetchMessages();
  //     },200)
  //   };

  //   const deleteMessages = async (messageIds) => {
  //     console.log("trying to delete")
  //     try {
  //       const response = await axios.post("http://192.168.0.4:4000/delete", {
  //         messages: messageIds, // Send selectedMessages array as messages
  //       });
  //       if (response.status === 200) {
  //         setSelectedMessages((prevSelectedMessages) =>
  //         prevSelectedMessages.filter((id) => !messageIds.includes(id))
  //       );
  // // setSelectedMessages([])
  //         fetchMessages();
  //       }
  //       //  else {
  //       //   console.log("response not ok", response.status);
  //       // }
  //     } catch (error) {
  //       console.log("error deleting messages", error);
  //     }
  //   };
  //   const fetchMessages = async () => {
  //     try {
  //       // const senderId = params?.senderId;
  //       // const receiverId = params?.receiverId;
  //       console.log("sender id",senderId)
  //       console.log("recieevr id",receiverId)
  //       const response = await axios.get("http://192.168.0.4:4000/messages", {
  //         params: { senderId, receiverId },
  //       });
  
  //       setMessages(response.data);
  //     } catch (error) {
  //       console.log("Error fetching the messages", error);
  //     }
  //   };
  //   // useEffect(() => {
  //   //   fetchMessages();
  //   // }, []);

  //   const handleSelectMessage = (message) => {
  //     console.log("long press")
  //     //check if the message is already selected
  //     const isSelected = selectedMessages.includes(message._id);
  
  //     if (isSelected) {
  //       setSelectedMessages((previousMessages) =>
  //         previousMessages.filter((id) => id !== message._id)
  //       );
  //     } else {
  //       setSelectedMessages((previousMessages) => [
  //         ...previousMessages,
  //         message._id,
  //       ]);
  //     }
  //   };
  //   //to b commented
  //   console.log("messages",selectedMessages)
  //   const formatTime = (time) => {
  //     const options = { hour: "numeric", minute: "numeric" };
  //     return new Date(time).toLocaleString("en-US", options);
  //   };

  return (
    <>
      <Tabs/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
         
           // Full height of the divport
        }}
      >
        <div
          style={{
            backgroundColor: "#f0f0f0",
            width: "80%",
            borderRadius: 30,
            padding: 20,
            fontWeight:'bold',
            fontFamily:"monospace"
          }}
        >
          {name}
        </div>

      </div>

      {/* <div  style={{
          display: "flex",
          justifyContent: "center",
         height:"100vh"
           // Full height of the divport
        }}>
          <div
          style={{
            backgroundColor: "#f0f0f0",
            width: "80%",
            borderRadius: 30,
            padding: 20,
            fontWeight:'bold',
            fontFamily:"monospace",
            marginTop:30
          }}
        >
         <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderTopWidth: 1,
            borderTopColor: "#dddddd",
            marginBottom: 1,
            marginTop:550
          }}
        >
          {/* <Entypo
            style={{ marginRight: 7 }}
            name="emoji-happy"
            size={24}
            color="gray"
          /> */}
          {/* <input
            value={message}
            onChangeText={(text) => setMessage(text)}
            style={{
                fontFamily:"monospace",
              flex: 1,
              height: 40,
              borderWidth: 1,
              borderColor: "#dddddd",
              borderRadius: 20,
              paddingHorizontal: 10,
            }}
            placeholder="Type your message..."
          />
  
         
  
          <button
            onClick={() => sendMessage(senderId, receiverId)}
            style={{
              backgroundColor: "#007bff",
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 20,
              marginLeft:20
            }}
          >
            <div style={{ textAlign: "center", color: "white",fontFamily:"monospace",marginLeft:20 }}>Send</div>
          </button>
        </div>
        </div>
        
        </div>
       */} 
      </>
  )
}





 {/* <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginHorizontal: 8,
            }}
          > */}
            {/* <Entypo name="camera" size={24} color="gray" />
  
            <Feather name="mic" size={24} color="gray" /> */}
          {/* </div> */}