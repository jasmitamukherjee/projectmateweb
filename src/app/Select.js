import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "core-js/stable/atob";

import { jwtDecode } from 'jwt-decode';


export default function Select() {
  const [option, setOption] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('auth');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };
    fetchUser();
  }, []);

  const updateUserGender = async () => {
    // console.log("click")
    try {
      const response = await axios.put(`http://192.168.0.4:4000/users/${userId}/gender`, {
        gender: option
      });

      console.log(response.data);

      if (response.status === 200) {
        // Redirect user to '//bio' route after successful gender update
        window.location.replace("/tabs");    
        }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (

    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div
        onClick={() => setOption('male')}
        style={{
          backgroundColor: option === 'male' ? '#F0F0F0':"#gray",
          padding: 12,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
          borderRadius: 5,
          borderColor: option === 'male' ? 'black' : 'transparent',
          borderWidth: option === 'male' ? 2 : 0
        }}
      >
        <span style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700 }}>I am a Man.</span>
        <img
          style={{ width: 50, height: 50 }}
          src="https://cdn-icons-png.flaticon.com/512/3233/3233508.png"
          alt="male"
        />
      </div>

      <div
        onClick={() => setOption('female')}
        style={{
          backgroundColor: '#F0F0F0',
          padding: 12,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
          borderRadius: 5,
          borderColor: option === 'female' ? 'black' : 'transparent',
          borderWidth: option === 'female' ? 10 : 0
        }}
      >
        <span style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700 }}>I am a woman.</span>
        <img
          style={{ width: 50, height: 50 }}
          src="https://cdn-icons-png.flaticon.com/256/1164/1164094.png"
          alt="female"
        />
      </div>

      <div
        onClick={() => setOption('nonbinary')}
        style={{
          backgroundColor: '#F0F0F0',
          padding: 12,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
          borderRadius: 5,
          borderColor: option === 'nonbinary' ? 'black' : 'transparent',
          borderWidth: option === 'nonbinary' ? 10 : 0
        }}
      >
        <span style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700 }}>I am non-binary.</span>
        <img
          style={{ width: 50, height: 50 }}
          src="https://cdn-icons-png.flaticon.com/512/7326/7326569.png"
          alt="nonbinary"
        />
      </div>

      {option && (
        <button
          onClick={updateUserGender}
          style={{
            marginTop: 25,
            backgroundColor: 'black',
            padding: 15,
            borderRadius: 4,
            border: 'none',
            color: 'white',
            fontFamily: 'monospace',
            fontSize: 16,
            cursor: 'pointer'
          }}
        >
          Done
        </button>
      )}
    </div>
  )
}
