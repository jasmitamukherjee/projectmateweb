// import React, { useCallback, useEffect, useState } from 'react';
// import axios from 'axios';
// import { IoChevronForwardCircleOutline } from 'react-icons/io5'; // Changed to right arrow icon
// import Tabs from './Tabs';
// import { AiOutlineLike } from 'react-icons/ai'; // Replaced heart icon with thumbs-up icon
// import { useNavigate } from 'react-router-dom';
// import UserChat from '../components/UserChat';
// import { jwtDecode } from 'jwt-decode'; // Corrected import statement

// const Chat = () => {
//   const navigate = useNavigate();
//   const [userId, setUserId] = useState('');
//   const [profiles, setProfiles] = useState([]);
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = await localStorage.getItem('auth');
//       const decodedToken = jwtDecode(token); // Corrected function name
//       const userId = decodedToken.userId;
//       setUserId(userId);
//     };
//     fetchUser();
//   }, []);

//   const fetchReceivedLikesDetails = async () => {
//     try {
//       const response = await axios.get(`http://192.168.0.4:4000/received-likes/${userId}/details`);
//       const receivedLikesDetails = response.data.receivedLikesDetails;
//       setProfiles(receivedLikesDetails);
//     } catch (error) {
//       console.log('error fetching the details', error);
//     }
//   };

//   const fetchUserMatches = async () => {
//     try {
//       const response = await axios.get(`http://192.168.0.4:4000/users/${userId}/matches`);
//       const userMatches = response.data.matches;
//       setMatches(userMatches);
//     } catch (error) {
//       console.log('Error', error);
//     }
//   };

//   useEffect(() => {
//     if (userId) {
//       fetchReceivedLikesDetails();
//     }
//   }, [userId]);

//   useEffect(() => {
//     if (userId) {
//       fetchUserMatches();
//     }
//   }, [userId]);

//   // 'useFocusEffect' is not defined, assuming it comes from a custom hook
//   const useFocusEffect = useCallback(() => {
//     if (userId) {
//       fetchUserMatches();
//     }
//   }, [userId]);

//   const handleNavigateToSelect = () => {
//     // console.log("profiles",profiles)
//     navigate('/chat/select', {
//       state: {
//         profiles: JSON.stringify(profiles),
//         userId: userId,
//       },
//     });
//   };

//   return (
//     <>
//       <Tabs />
//       <div style={{ backgroundColor: 'white', flex: 1, padding: 10 }}>
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <div style={{
//             width: 50,
//             height: 50,
//             borderRadius: 25,
//             backgroundColor: '#E0E0E0',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginRight: 10,
//           }}>
//             <AiOutlineLike size={27} color="black" /> {/* Replaced heart icon with thumbs-up icon */}
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <p style={{ fontFamily: 'monospace', fontSize: 20, marginRight: 10 }}>
//               You have got {profiles.length} likes..
//             </p>
//             <button onClick={handleNavigateToSelect} style={{ border: 'none', background: 'none', cursor: 'pointer',marginTop:-13 }}>
//               <IoChevronForwardCircleOutline size={25} color="black" />
//             </button>
//           </div>
//         </div>
//         <div>
//           {matches?.map((item, index) => (
//             <UserChat key={index} userId={userId} item={item} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Chat;

// Chat.js
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { IoChevronForwardCircleOutline } from 'react-icons/io5'; // Changed to right arrow icon
import Tabs from './Tabs';
import { AiOutlineLike } from 'react-icons/ai'; // Replaced heart icon with thumbs-up icon
import { useNavigate } from 'react-router-dom';
import UserChat from './UserChat';
import { jwtDecode } from 'jwt-decode'; // Corrected import statement

const Chat = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const token = await localStorage.getItem('auth');
      const decodedToken = jwtDecode(token); // Corrected function name
      const userId = decodedToken.userId;
      setUserId(userId);
    };
    fetchUser();
  }, []);

  const fetchReceivedLikesDetails = async () => {
    try {
      const response = await axios.get(`http://192.168.0.4:4000/received-likes/${userId}/details`);
      const receivedLikesDetails = response.data.receivedLikesDetails;
      setProfiles(receivedLikesDetails);
    } catch (error) {
      console.log('error fetching the details', error);
    }
  };

  const fetchUserMatches = async () => {
    try {
      const response = await axios.get(`http://192.168.0.4:4000/users/${userId}/matches`);
      const userMatches = response.data.matches;
      setMatches(userMatches);
    } catch (error) {
      console.log('Error', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchReceivedLikesDetails();
      fetchUserMatches(); 
      console.log("matches",matches)

    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetchUserMatches();
    }
  }, [userId]);

  // 'useFocusEffect' is not defined, assuming it comes from a custom hook
  const useFocusEffect = useCallback(() => {
    if (userId) {
      fetchUserMatches();
    }
  }, [userId]);

  const handleNavigateToSelect = () => {
    // console.log("profiles",profiles)
    // navigate('/chat/select', {
    //   state: {
    //     profiles: JSON.stringify(profiles),
    //     userId: userId,
    //   },
    // });
    const queryString = new URLSearchParams();
    queryString.append('profiles', JSON.stringify(profiles));
    queryString.append('userId', userId);
    window.location.href = `/chat/select?${queryString.toString()}`;
  };

  return (
    <>
      <Tabs />
      <div style={{ backgroundColor: 'white', flex: 1, padding: 10 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#E0E0E0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}>
            <AiOutlineLike size={27} color="black" /> {/* Replaced heart icon with thumbs-up icon */}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ fontFamily: 'monospace', fontSize: 20, marginRight: 10 }}>
              You have got {profiles.length} likes..
            </p>
            <button onClick={handleNavigateToSelect} style={{ border: 'none', background: 'none', cursor: 'pointer',marginTop:-13 }}>
              <IoChevronForwardCircleOutline size={25} color="black" />
            </button>
          </div>
        </div>
        <div>
          {matches?.map((item, index) => (
            <UserChat key={index} userId={userId} profiles={profiles} /> 
          ))}
        </div>
      </div>
    </>
  );
};

export default Chat;
