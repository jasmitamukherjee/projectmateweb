// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaStar, FaRegThumbsUp } from 'react-icons/fa';
// import { BiDotsVerticalRounded } from 'react-icons/bi';
// import Tabs from './Tabs'
// const ChatSelect = () => {
//   const [profiles, setProfiles] = useState([]);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const params = new URLSearchParams(window.location.search);
//         const profilesData = JSON.parse(params.get('profiles'));
//         const userIdData = params.get('userId');

//         setProfiles(profilesData || []); // Ensure profilesData is not null
//         setUserId(userIdData);
//         // console.log("profiles from chatselect",profiles)
//         // console.log("user id from chat select",userId)
//       } catch (error) {
//         console.log('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleMatch = async (selectedUserId) => {
//     try {
//       await axios.post('http://192.168.0.4:5000/create-match', {
//         currentUserId: userId,
//         selectedUserId: selectedUserId,
//       });
//       setTimeout(() => {
//         window.location.replace("/chat");
//       }, 500);
//     } catch (error) {
//       console.log('Error creating match:', error);
//     }
//   };

//   return (
//     <>
//     <Tabs/>
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//       {/* <div style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
//         <div style={{ backgroundColor: '#F0F0F0', padding: 10, borderRadius: 18 }}>
//           <span style={{ textAlign: 'center', fontFamily: 'monospace' }}>Nearby</span>
//         </div>
//         <div style={{ backgroundColor: '#F0F0F0', padding: 10, borderRadius: 18 }}>
//           <span style={{ textAlign: 'center', fontFamily: 'monospace' }}>Looking For</span>
//         </div>
//         <div style={{ backgroundColor: '#F0F0F0', padding: 10, borderRadius: 18 }}>
//           <span style={{ textAlign: 'center', fontFamily: 'monospace' }}>Keywords</span>
//         </div>
//       </div> */}

//       {profiles.length > 0 ? (
//         <div style={{ marginTop: 20 }}>
//           {profiles.map((item, index) => (
//             <div key={index} style={{ marginVertical: 15 }}>
//               <div style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
//                 <div>
//                   <h2 style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'monospace' }}>{item.name}</h2>
//                   <p style={{ width: 200, marginTop: 15, fontSize: 18, lineHeight: 24, fontFamily: 'monospace', marginBottom: 8 }}>{item.description}</p>
//                 </div>
//                 {item.projectImages.slice(0, 1).map((image, index) => (
//                   <img key={index} src={image} style={{ width: 280, height: 280, borderRadius: 5 }} alt="Project" />
//                 ))}
//               </div>

//               <div>
//                 <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
//                   <div>
//                     <BiDotsVerticalRounded size={26} color="black" />
//                   </div>
//                   <div style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
//                     <div style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center' }}>
//                       <FaStar size={26} color="black" />
//                     </div>
//                     <div style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center' }}>
//                       <FaRegThumbsUp size={27} color="black" onClick={() => handleMatch(item._id)} />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div style={{ marginTop: 12 }}>
//                 <span>Keywords</span>
//                 <div style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
//                   {item.keywords.map((keyword, index) => (
//                     <div key={index} style={{ backgroundColor: '#4c0a4f', padding: 10, borderRadius: 22 }}>
//                       <span style={{ textAlign: 'center', color: 'white', fontWeight: '500', fontFamily: 'monospace' }}>{keyword}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div style={{ marginTop: 12 }}>
//                 <span>Looking For</span>
//                 <div style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
//                   {item.lookingFor.map((lookingFor, index) => (
//                     <div key={index} style={{ backgroundColor: '#c6a5d1', padding: 10, borderRadius: 22 }}>
//                       <span style={{ textAlign: 'center', color: 'black', fontWeight: '500', fontFamily: 'monospace' }}>{lookingFor}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
//           {/* <img src="https://cdn-icons-png.flaticon.com/512/1087/1087815.png" alt="No Likes" style={{ width: 100, height: 100 }} /> */}
//           <div>
//             <h3 style={{ fontSize: 15, fontFamily: 'monospace', textAlign: 'center', fontWeight: 'bold' }}>UH - OH <span style={{ fontSize: 15, fontFamily: 'monospace', color: '#FF69B4' }}>No likes yet!</span></h3>
//             <p style={{ marginTop: 10, fontSize: 16, fontWeight: '600', fontFamily: 'monospace' }}>Improve your project description to get better likes.</p>
//           </div>
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default ChatSelect;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {FaRegThumbsUp } from 'react-icons/fa';
import Tabs from './Tabs';

const ChatSelect = () => {
  const [profiles, setProfiles] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const profilesData = JSON.parse(params.get('profiles'));
        const userIdData = params.get('userId');

        setProfiles(profilesData || []); // Ensure profilesData is not null
        setUserId(userIdData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleMatch = async (selectedUserId) => {
    console.log(selectedUserId)
    try {
      const response = await axios.post('http://192.168.0.4:4000/create-match', {
        currentUserId: userId,
        selectedUserId: selectedUserId,
      });
      setTimeout(() => {
        window.location.replace("/chat");
      }, 5000);
      // console.log(response)
    } catch (error) {
      console.log('Error creating match:', error);
    }
  };

  return (
    <>
      <Tabs />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" ,width:"100%"}}>
        {profiles.length > 0 ? (
          <div style={{ marginTop: 20 ,width:"70%",marginLeft:50}}>
            {profiles.map((item, index) => (
              <div key={index} style={{ marginVertical: 15, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "80%", backgroundColor: "#F0F0F0", padding: 20, borderRadius: 10 }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  {/* <img src={item.projectImages[0]} style={{ width: 120, height: 120, borderRadius: 10, marginRight: 20 }} alt="Project" /> */}
                  <div>
                    <h2 style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'monospace' }}>{item.name}</h2>
                    <p style={{ width: 200, fontSize: 16, fontFamily: 'monospace', marginBottom: 8 }}>{item.description}</p>
                    <div style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                      <div style={{ backgroundColor: 'red', padding: 10, borderRadius: 22,width:200 }}>
                        <div style={{ color: 'white', fontWeight: '500', fontFamily: 'monospace' }}>Keywords</div>
                      </div>
                      <div style={{display:"flex",flexWrap:"wrap"}}>
                      {item.keywords.map((keyword, index) => (
                        <div key={index} style={{ backgroundColor: '#4c0a4f', padding: 10, borderRadius: 22 ,flexDirection:"row",marginTop:20,marginLeft:"auto",marginRight:"auto"}}>
                          <span style={{ color: 'white', fontWeight: '500', fontFamily: 'monospace' }}>{keyword}</span>
                        </div>
                      ))}
                      </div>
                    </div>
                    <div style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 ,width:200}}>
                      <div style={{ backgroundColor: 'red', padding: 10, borderRadius: 22 }}>
                        <div style={{ color: 'black', fontWeight: '500', fontFamily: 'monospace' }}>Looking For</div>
                      </div>
                      <div style={{display:"flex",flexWrap:"wrap"}}>
                      {item.lookingFor.map((lookingFor, index) => (
                        <div key={index} style={{ backgroundColor: '#c6a5d1', padding: 10, borderRadius: 22,marginTop:20,marginLeft:"auto",marginRight:"auto" }}>
                          <div style={{ color: 'black', fontWeight: '500', fontFamily: 'monospace' }}>{lookingFor}</div>
                        </div>
                        
                      ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                  {/* <div style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center' }}>
                    <FaStar size={26} color="black" />
                  </div> */}
                  <button style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#E0E0E0', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none' }} onClick={() => handleMatch(item._id)}>
                    <FaRegThumbsUp size={27} color="black" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
            <div>
              <h3 style={{ fontSize: 15, fontFamily: 'monospace', textAlign: 'center', fontWeight: 'bold' }}>UH - OH <span style={{ fontSize: 15, fontFamily: 'monospace', color: '#FF69B4' }}>No likes yet!</span></h3>
              <p style={{ marginTop: 10, fontSize: 16, fontWeight: '600', fontFamily: 'monospace' }}>Improve your project description to get better likes.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatSelect;
