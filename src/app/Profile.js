import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Profiles from '../components/Profiles'
import { jwtDecode } from 'jwt-decode';
import Tabs from './Tabs'
const Index = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("");
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const token = await localStorage.getItem("auth");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    }
    fetchUser();
  }, []);

  const fetchUserDescription = async () => {
    try {
      const response = await axios.get(`http://192.168.1.5:4000/users/${userId}`);
      console.log(response);
      const userData = response.data;

      setUser(userData.user);
    } catch (error) {
      console.log("Error finding user description", error);
    }
  };

  const fetchProfiles = async () => {
    try {
      const response = await axios.get("http://192.168.1.5:4000/profiles", {
        params: {
          userId: userId,
          gender: user?.gender,
          keywords: user?.keywords,
          lookingFor: user?.lookingFor,
        },
      });

      setProfiles(response.data.profiles);
      console.log(profiles)
    } catch (error) {
      console.log("Error fetching profiles", error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserDescription();
    }
  }, [userId]);

  useEffect(() => {
    if (userId && user) {
      fetchProfiles();
    }
  }, [userId, user]);

  return (
    <>
    <Tabs/>
    <div style={{ padding: 13 }}>
      {profiles.map((profile, index) => (
        <Profiles
          key={index}
          item={profile}
          userId={userId}
          setProfiles={setProfiles}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
    </>
  );
};

export default Index;
