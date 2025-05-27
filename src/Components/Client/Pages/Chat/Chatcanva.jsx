import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import './Chat.css';
import ApiServices from '../../../ApiServices/ApiServices';
import {toast} from 'react-toastify'
const socket = io('http://localhost:5000'); // This now works

const userId = sessionStorage.getItem('userId');

const Chatcanva = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [client, setClient] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchClients = async () => {
    let formData = {}
        ApiServices.devAll(formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setClient(res.data.data)
                    
                }
                else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            }) 
  };

  const fetchMessages = async (receiverId) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/client/chat/all',
        {
          senderId: userId,
          receiverId,
          limit: 100,
          currentPage: 1
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
          }
        }
      );
      if (res.data.success) {
        const formatted = res.data.chatData.map((msg) => ({
          text: msg.messages,
          sender: msg.senderId === userId ? 'me' : 'other'
        }));
        setChat(formatted);
      }
    } catch (err) {
      console.error('Message fetch error:', err);
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    fetchMessages(user.userId._id);
    socket.emit('joinRoom', {
      senderId: userId,
      receiverId: user.userId._id
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !selectedUser) return;

    const msgData = {
      senderId: userId,
      receiverId: selectedUser.userId._id,
      text: message
    };
    socket.emit('sendMessage', msgData);
    setChat((prev) => [...prev, { sender: 'me', text: message }]);
    setMessage('');
  };

  useEffect(() => {
    fetchClients();
  }, []);

  useEffect(() => {
    socket.on('receiveMessage', (msg) => {
      if(msg.senderId===userId) return;
      if (
        selectedUser && msg.senderId === selectedUser.userId._id 
      ) {
        setChat((prev) => [...prev, { sender: 'other', text: msg.text }]);
      }
    });
    return () => socket.off('receiveMessage');
  }, [selectedUser]);

  return (
    <div className="chatcont">
      <div className="sidebar">
        <p className="mes">Messages</p>
        <div className="profile-list">
          {client.map((ele, idx) => (
            <div key={idx} className="profile" onClick={() => handleUserSelect(ele)}>
              <img className="avatar" src={ele.photo || '/default.png'} alt="avatar" />
              <div>
                <div className="name">{ele.userId.name}</div>
                <div className="status">{ele.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-section">
        {selectedUser ? (
          <>
            <div className="chat-header">
              <img className="avatar large" src={selectedUser.photo || '/default.png'} alt="avatar" />
              <div className="chat-name">{selectedUser.userId.name}</div>
            </div>
            <div className="messages">
              {chat.map((msg, idx) => (
                <div
                  key={idx}
                  className={msg.sender === 'me' ? 'message sent' : 'message received'}
                >
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
            <form className="input-section" onSubmit={sendMessage}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="form-control input"
              />
              <button type="submit" className="next1">Send</button>
            </form>
          </>
        ) : (
          <div className="no-user">Select a user to start chatting</div>
        )}
      </div>
    </div>
  );
};

export default Chatcanva;