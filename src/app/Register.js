import React, { useState } from 'react';
import axios from 'axios';import Navbar from './Navbar'

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    axios.post("http://192.168.0.4:4000/register", user)
      .then((response) => {
        console.log(response);
        alert('Registration successful', 'You have been registered successfully');
        setEmail("");
        setName("");
        setPassword("");
      })
      .catch((error) => {
        console.log("Error while registering", error);
        alert("Registration failed", "An error occurred while registering");
      });
  };
  return (
    <div>
      <Navbar/>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* <div style={{ height: 200, backgroundColor: "#c6a5d1", width: "100%", borderBottomRightRadius: 150, borderBottomLeftRadius: 150 }}>
        <div style={{ justifyContent: "center", alignItems: "center", marginTop: 5 }}>
          <img style={{ width: 150, height: 80, objectFit: "contain" }} src="https://cdn-icons-png.flaticon.com/512/2024/2024101.png" alt="logo" />
        </div>
        <h1 style={{ marginTop: 20, textAlign: "center", fontSize: 20, fontWeight: "bold", fontFamily: "monospace", color: "white" }}>Project Mate</h1>
      </div> */}
      <div style={{ alignItems: "center" }}>
        <h2 style={{ fontSize: 17, fontWeight: "bold", marginTop: 25, color: "#6a0a7d", fontFamily: "monospace" }}>Register your Account</h2>
      </div>
      <div style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
        <img style={{ width: 150, height: 100, objectFit: "cover" }} src="https://cdn-icons-png.freepik.com/512/7910/7910833.png" alt="illustration" />
      </div>
      <div style={{ marginTop: 20 }}>
        <div style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#c6a5d1", padding: "10px 15px", borderRadius: 5, marginTop: 30 }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ color: "white", marginVertical: 10, width: 300, fontFamily: "monospace", fontSize: "17px", border: "none", outline: "none", backgroundColor: "transparent" }}
          />
        </div>
        <div style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#c6a5d1", padding: "10px 15px", borderRadius: 5, marginTop: 30 }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{ color: "white", marginVertical: 10, width: 300, fontFamily: "monospace", fontSize: "17px", border: "none", outline: "none", backgroundColor: "transparent" }}
          />
        </div>
        <div style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#c6a5d1", padding: "10px 15px", borderRadius: 5, marginTop: 30 }}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{ color: "white", marginVertical: 10, width: 300, fontFamily: "monospace", fontSize: "17px", border: "none", outline: "none", backgroundColor: "transparent" }}
          />
        </div>
        <div style={{ marginTop: 30, alignItems: 'center' }}>
          <button
            onClick={handleRegister}
            style={{ width: 60, backgroundColor: "white", borderRadius: 6, padding: 15, border: "none", color: "white", fontSize: 16, fontFamily: "monospace", cursor: "pointer" }}
          >
            Register
          </button>
          <button
            onClick={handleRegister}
            style={{ width: 200, backgroundColor: "#c6a5d1", borderRadius: 6, padding: 15, border: "none", color: "white", fontSize: 16, fontFamily: "monospace", cursor: "pointer" }}
          >
            Register
          </button>
          <p style={{ fontWeight: "bold", textAlign: "center", color: "gray", fontSize: 16, fontFamily: "monospace", marginTop: 12 }}>Already have an account? <a href="/login" style={{ color: "gray", fontWeight: "bold" }}>Sign In</a></p>
        </div>
      </div>
    </div>
    </div>
  )
}
