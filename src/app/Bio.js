import Tabs from './Tabs'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default function Bio() {
    // const [option, setOption] = useState("Description");
    // const [description, setDescription] = useState("");
    // const [userId, setUserId] = useState("");
    // const [selectedKeywords, setSelectedKeywords] = useState([]);
    // const [lookingOptions, setLookingOptions] = useState([]);
    // const [imageUrl, setImageUrl] = useState("");
    // const [images, setImages] = useState([]);
    // const [name, setName] = useState("");
    // const [gender, setGender] = useState("");

    // const fetchUser = async () => {
    //     const token = localStorage.getItem('auth');
    //     const decodedToken = jwtDecode(token);
    //     const userId = decodedToken.userId;
    //     setUserId(userId);
    // };

    // useEffect(() => {
    //     fetchUser();
    // }, []);

    // const fetchUserDescription = async () => {
    //     try {
    //         const response = await axios.get(`http://192.168.1.5:4000/users/${userId}`);
    //         const user = response.data;
    //         setDescription(user?.user?.description);
    //         setSelectedKeywords(user.user?.keywords);
    //         setImages(user?.user.projectImages);
    //         setLookingOptions(user?.user.lookingFor);
    //         setName(user?.user.name);
    //         setGender(user?.user.gender);
    //     } catch (error) {
    //         console.log("Error finding user description", error);
    //     }
    // };

    // useEffect(() => {
    //     if (userId) {
    //         fetchUserDescription();
    //     }
    // }, [userId]);

    // const updateUserDescription = async () => {
    //     try {
    //         const response = await axios.put(
    //             `http://192.168.1.5:4000/users/${userId}/description`,
    //             { description: description }
    //         );

    //         console.log(response.data);

    //         if (response.status === 200) {
    //             alert("Description updated successfully");
    //         }
    //     } catch (error) {
    //         console.log("Error updating description for project", error);
    //     }
    // };

    // const handleAddImage = async () => {
    //     try {
    //         const response = await axios.post(`http://192.168.1.5:4000/users/${userId}/project-images`, {
    //             imageUrl: imageUrl
    //         });

    //         console.log(response);

    //         setImageUrl("");
    //     } catch (error) {
    //         console.log("Error posting image", error);
    //     }
    // };

   

    // const handleToggleKeywords = (keywordName) => {
    //     const updatedKeywords = selectedKeywords.includes(keywordName)
    //         ? selectedKeywords.filter((keyword) => keyword !== keywordName)
    //         : [...selectedKeywords, keywordName];
    //     setSelectedKeywords(updatedKeywords);
    //     console.log(selectedKeywords)
    // };

    // const handleOption = (optionName) => {
    //     const updatedOptions = lookingOptions.includes(optionName)
    //         ? lookingOptions.filter((option) => option !== optionName)
    //         : [...lookingOptions, optionName];
    //     setLookingOptions(updatedOptions);
    //     console.log(lookingOptions)
    // };

    // const handleLogout = async () => {
    //     try {
    //         await localStorage.removeItem("auth");
    //         window.location.replace("/");
    //     } catch (error) {
    //         console.log("Error", error);
    //     }
    // };

    const [option, setOption] = useState("Description");
    const [description, setDescription] = useState("");
    const [userId, setUserId] = useState("");
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [lookingOptions, setLookingOptions] = useState([]);
    const [imageUrl, setImageUrl] = useState("");
    const [images, setImages] = useState([]);
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");

    const fetchUser = async () => {
        const token = localStorage.getItem('auth');
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
        setUserId(userId);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        if (userId) {
            fetchUserDescription();
        }
    }, [userId]);

    const fetchUserDescription = async () => {
        try {
            const response = await axios.get(`http://192.168.1.5:4000/users/${userId}`);
            const user = response.data;
            setDescription(user?.user?.description);
            setSelectedKeywords(user.user?.keywords);
            setImages(user?.user.projectImages);
            setLookingOptions(user?.user.lookingFor);
            setName(user?.user.name);
            setGender(user?.user.gender);
        } catch (error) {
            console.log("Error finding user description", error);
        }
    };

    const updateUserDescription = async () => {
        try {
            const response = await axios.put(
                `http://192.168.1.5:4000/users/${userId}/description`,
                { description: description }
            );

            console.log(response.data);

            if (response.status === 200) {
                alert("Description updated successfully");
            }
        } catch (error) {
            console.log("Error updating description for project", error);
        }
    };

    const handleAddImage = async () => {
        try {
            const response = await axios.post(`http://192.168.1.5:4000/users/${userId}/project-images`, {
                imageUrl: imageUrl
            });

            console.log(response);

            setImageUrl("");
        } catch (error) {
            console.log("Error posting image", error);
        }
    };

    // const handleToggleKeywords = (keywordName) => {
    //     const updatedKeywords = selectedKeywords.includes(keywordName)
    //         ? selectedKeywords.filter((keyword) => keyword !== keywordName)
    //         : [...selectedKeywords, keywordName];
    //     setSelectedKeywords(updatedKeywords);
    //     localStorage.setItem('selectedKeywords', JSON.stringify(updatedKeywords));
    // };

    // const handleOption = (optionName) => {
    //     const updatedOptions = lookingOptions.includes(optionName)
    //         ? lookingOptions.filter((option) => option !== optionName)
    //         : [...lookingOptions, optionName];
    //     setLookingOptions(updatedOptions);
    //     localStorage.setItem('lookingOptions', JSON.stringify(updatedOptions));
    // };

    
const handleToggleKeywords= (keywords) =>{
  // console.log("keywords",keywords)
  if(selectedKeywords.includes(keywords)){
    removeKeywords(keywords)
  }else{
    addKeywords(keywords)
  }

}
const handleOption= (lookingFor)=>{
  if(lookingOptions.includes(lookingFor)){
    removeLookingFor(lookingFor)
  }
  else{
    addLookingFor(lookingFor)
  }
}
const addLookingFor= async (lookingFor)=>{
  try {
    const response = await axios.put(
      `http://192.168.1.5:4000/users/${userId}/looking-for`,
      {
        lookingFor: lookingFor,
      }
    );

    console.log(response.data);

    if (response.status === 200) {
      setLookingOptions([...lookingOptions, lookingFor]);
    }

    
  } catch (error) {
    console.log("Error adding looking for",error)
  }
}

const removeLookingFor = async (lookingFor) => {
  try {
    const response = await axios.put(
      `http://192.168.1.5:4000/users/${userId}/looking-for/remove`,
      {
        lookingFor: lookingFor,
      }
    );

    console.log(response.data); // Log the response for confirmation

    // Handle success or update your app state accordingly
    if (response.status === 200) {
      setLookingOptions(lookingOptions.filter((item) => item !== lookingFor));
    }
  } catch (error) {
    console.error("Error removing looking for:", error);
    // Handle error scenarios
  }
};
const addKeywords= async (keywords)=>{
  try {
    const response = await axios.put(
      `http://192.168.1.5:4000/users/${userId}/keywords/add`,
      {
        keywords: keywords,
      }
    );

    console.log(response.data);

    if (response.status == 200) {
      setSelectedKeywords([...selectedKeywords, keywords]);
    }
    
  } catch (error) {
    console.log("Error adding keywords",error)
    
  }
}
const removeKeywords = async (keywords)=>{
try {
  const response = await axios.put(
    `http://192.168.1.5:4000/users/${userId}/keywords/remove`,
    {
      keywords: keywords,
    }
  );

  console.log(response.data);

  if (response.status === 200) {
    setSelectedKeywords(selectedKeywords.filter((item) => item !== keywords));
  }
  
} catch (error) {
  console.log("Error removing keywords",error)
  
}
}

    const handleLogout = async () => {
        try {
            await localStorage.removeItem("auth");
            window.location.replace("/");
        } catch (error) {
            console.log("Error", error);
        }
    };

    useEffect(() => {
        const storedSelectedKeywords = localStorage.getItem('selectedKeywords');
        if (storedSelectedKeywords) {
            setSelectedKeywords(JSON.parse(storedSelectedKeywords));
        }

        const storedLookingOptions = localStorage.getItem('lookingOptions');
        if (storedLookingOptions) {
            setLookingOptions(JSON.parse(storedLookingOptions));
        }
    }, []);

    const keywords = [
      {
        id: "0",
        name: "React",
        description: "A JavaScript library for building user interfaces, commonly used for building single-page applications.",
      },
      {
        id: "1",
        name: "Java",
        description: "A high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
      },
      {
        id: "2",
        name: "NGO",
        description: "Non-governmental organization, a non-profit group that functions independently of any government.",
      },
      {
        id: "3",
        name: "Coding",
        description: "The process of using a programming language to instruct a computer to perform a certain task.",
      },
      {
        id: "4",
        name: "JavaScript",
        description: "A programming language that enables interactive web pages and is an essential part of web development.",
      },
      {
        id: "5",
        name: "Python",
        description: "A high-level programming language known for its simplicity and readability, widely used in web development, data science, and more.",
      },
      {
        id: "6",
        name: "HTML/CSS",
        description: "Markup and styling languages used for creating web pages.",
      },
      {
        id: "7",
        name: "Blockchain",
        description: "A decentralized and distributed digital ledger technology used to record transactions across multiple computers.",
      },
      {
        id: "8",
        name: "Mobile App Development",
        description: "The process of creating software applications that run on mobile devices, such as smartphones and tablets.",
      },
      {
        id: "9",
        name: "Data Science",
        description: "An interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.",
      },
      {
        id: "10",
        name: "Machine Learning",
        description: "A subset of artificial intelligence that focuses on the development of algorithms that enable computers to learn from and make predictions or decisions based on data.",
      },
    ];
  
    const data = [
      {
        id: "0",
        name: "Casual",
        description: "Looking for a casual partnership, exploring without pressure.",
      },
      {
        id: "1",
        name: "Long Term",
        description: "Seeking a committed, long-term collaboration.",
      },
      {
        id: "2",
        name: "Virtual",
        description: "Interested in virtual collaboration opportunities.",
      },
      {
        id: "3",
        name: "Open for Anything",
        description: "Open-minded and flexible, willing to explore various possibilities.",
      },
      {
        id: "4",
        name: "Project-based",
        description: "Focused on collaborating on specific projects or initiatives.",
      },
      {
        id: "5",
        name: "Networking",
        description: "Looking to expand professional connections and opportunities.",
      },
      {
        id: "6",
        name: "Mentorship",
        description: "Seeking mentorship opportunities or willing to mentor others.",
      },
      {
        id: "7",
        name: "Remote",
        description: "Prefer collaborating remotely or working with remote teams.",
      },
      {
        id: "8",
        name: "In-person",
        description: "Prefer collaborating in-person rather than remotely.",
      },
      {
        id: "9",
        name: "Flexible Schedule",
        description: "Looking for a collaborator with a flexible schedule for better coordination.",
      },
      {
        id: "10",
        name: "Creative Projects",
        description: "Interested in collaborating on innovative and creative projects.",
      },
    ];
    return (
      <>
      <Tabs/>
        <div style={{ fontFamily: "monospace", padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <div style={{ flex: "0 0 auto", marginRight: "20px" }}>
                    <img style={{ width: "60px", height: "60px", borderRadius: "50%" }} src='https://blog.logrocket.com/wp-content/uploads/2021/02/machine-learning-libraries-javascript.png' alt="profile" />
                </div>
                <div>
                    <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "4px" }}>{name}</div>
                    <div style={{ fontSize: "15px", fontWeight: "700" }}>{gender}</div>
                </div>
                <nav style={{ marginLeft: "auto" }}>
                    <button style={{ marginRight: "10px", backgroundColor: option === "Description" ? "#4c0a4f" : "#ccc", color: option === "Description" ? "#fff" : "#000", borderRadius: "5px", padding: "5px 10px" }} onClick={() => setOption("Description")}>Description</button>
                    <button style={{ marginRight: "10px", backgroundColor: option === "Photos" ? "#4c0a4f" : "#ccc", color: option === "Photos" ? "#fff" : "#000", borderRadius: "5px", padding: "5px 10px" }} onClick={() => setOption("Photos")}>Photos</button>
                    <button style={{ marginRight: "10px", backgroundColor: option === "Keywords" ? "#4c0a4f" : "#ccc", color: option === "Keywords" ? "#fff" : "#000", borderRadius: "5px", padding: "5px 10px" }} onClick={() => setOption("Keywords")}>Keywords</button>
                    <button style={{ backgroundColor: option === "Looking For" ? "#4c0a4f" : "#ccc", color: option === "Looking For" ? "#fff" : "#000", borderRadius: "5px", padding: "5px 10px" }} onClick={() => setOption("Looking For")}>Looking For</button>
                    <button style={{backgroundColor:  "grey" , color: "black", borderRadius: "5px", padding: "5px 10px" ,marginLeft:10}} onClick={handleLogout}>Logout</button>

               
                </nav>
            </div>

            <div style={{ marginBottom: "20px" }}>
                {option === "Description" && (
                    <div>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={{ width: "100%", minHeight: "200px", borderRadius: "10px", border: "1px solid #202020", padding: "10px" }}
                        ></textarea>
                        <button
                            style={{ backgroundColor: "#4c0a4f", color: "white", padding: "10px 20px", borderRadius: "5px", marginTop: "10px" }}
                            onClick={updateUserDescription}
                        >
                            Publish in feed
                        </button>
                    </div>
                )}

                {option === "Photos" && (
                    <div>
                        <div style={{ marginBottom: "10px" }}>
                            <input
                                type="text"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="Enter your image url"
                                style={{ width: "300px", padding: "10px", borderRadius: "5px", border: "1px solid #dcdcdc", marginRight: "10px" }}
                            />
                            <button
                                style={{ backgroundColor: "#dcdcdc", padding: "10px 20px", borderRadius: "5px", border: "none" }}
                                onClick={handleAddImage}
                            >
                                Add image
                            </button>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                            {images.map((img, index) => (
                                <img key={index} src={img.image} alt={`image-${index}`} style={{ width: "100px", height: "100px", margin: "5px" }} />
                            ))}
                        </div>
                    </div>
                )}

                {option === "Keywords" && (
                    <div>
                        {keywords.map((keyword, index) => (
                            <div key={index} style={{ backgroundColor: "#edd5e5", padding: "10px", marginBottom: "10px", borderRadius: "10px" }}>
                                <input
                                    type="checkbox"
                                    checked={selectedKeywords.includes(keyword.name)}
                                    onChange={() => handleToggleKeywords(keyword.name)}
                                    style={{ marginRight: "10px" }}
                                />
                                <label>{keyword.name}</label>
                                <p>{keyword.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {option === "Looking For" && (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {data.map((item) => (
                            <div key={item.id} style={{ width: "calc(50% - 20px)", padding: "10px", marginBottom: "20px", borderRadius: "5px", border: "1px solid #202020", marginLeft: "auto", marginRight: "auto" }}>
                                <input
                                    type="checkbox"
                                    checked={lookingOptions.includes(item.name)}
                                    onChange={() => handleOption(item.name)}
                                    style={{ marginRight: "10px" }}
                                />
                                <label>{item.name}</label>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
        </>
    );
}
