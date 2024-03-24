import React, { useEffect, useState } from 'react'
import { AiOutlineLoading } from "react-icons/ai";
import { IoCheckmarkOutline } from "react-icons/io5";
import { BiCircle } from "react-icons/bi";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [videoData, setVideoData] = useState([undefined, undefined, undefined, undefined]);
    const [videoUrls, setVideoUrls] = useState(undefined);

    const [query, setQuery] = useState("");
    const [loadingDone, setLoadingDone] = useState(false);

    const navigate = useNavigate();

    async function getQuestions(videoUrl, index) {
        console.log(videoUrl);

        try {
            const response = await axios.post(`https://4d9b9569-b5b3-46cb-a054-dd53d353a0fe-00-d8nq3v8p7rw3.picard.replit.dev/actualPost`, { text: videoUrl }, {
                headers: {
                    'Content-Type': 'text/plain',
                },
            });

            if (response.data === "Nothing") {
                setVideoData(prevVideoData => {
                    const newData = [...prevVideoData];
                    newData[index] = undefined;
                    return newData;
                });
            } else if (Object.values(response.data)[0].length === 4) {
                setVideoData(prevVideoData => {
                    const newData = [...prevVideoData];
                    newData[index] = response.data;
                    return newData;
                });
            } else {
                let data = {};
                for (const key in response.data) {
                    const question = response.data[key][0];
                    const answers = response.data[key].slice(1);

                    console.log("QUESTIONS:", question, "ANSWER:", answers);
                    data[question] = answers;
                }
                setVideoData(prevVideoData => {
                    const newData = [...prevVideoData];
                    newData[index] = data;
                    return newData;
                });
            }
        } catch (e) {
            setVideoData(prevVideoData => {
                const newData = [...prevVideoData];
                newData[index] = undefined;
                return newData;
            });
        }
    }


    async function getVideos(query) {
        setLoadingDone(false);

        const response = await axios.post(`https://4d9b9569-b5b3-46cb-a054-dd53d353a0fe-00-d8nq3v8p7rw3.picard.replit.dev/findTwo`, { text: query }, {
            headers: {
                'Content-Type': 'text/plain',
            },
        });

        console.log("Video URLs: ", response.data);
        setVideoUrls(response.data);

        for (const urlIndex in response.data) {
            await getQuestions(response.data[urlIndex], urlIndex);
        }

        setLoadingDone(true);
    }

    useEffect(() => {
        console.log(videoData);
    }, [videoData]);

    return (
        <div className='App'>
            <h1 className='container' style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '50px' }}>CourseGen</h1>
            <div className='container' style={{ marginTop: '50px' }}>
                <div className='row'>
                    <div className='col-sm'>
                        <div style={{ marginBottom: '30px' }} className='input-thing'>
                            <div className="" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center' }}>
                                <input type="text" className="generate-input" placeholder="Enter your topic" style={{ padding: '15px 15px', fontSize: '22px', border: '2px solid lightgray', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', borderRight: '0px', margin: 'none', 'width': '80%' }} value={query} onChange={(e) => setQuery(e.target.value)} onBlur={() => {
                                    if (query.length > 0) {
                                        getVideos(query);
                                    }
                                }} />
                                <button className="generate-btn" type="button" style={{ padding: '15px 15px', fontSize: '22px', border: 'none', backgroundColor: '#9900FF', color: 'white', margin: 'none', borderTopRightRadius: '5px', borderBottomRightRadius: '5px', transition: '0.2s all ease-in-out' }}>Generate!</button>
                            </div>
                        </div>
                        <div style={{ border: '2px lightgray solid', borderRadius: '5px', padding: '15px 15px', marginBottom: '30px' }}>
                            <h2>How to Use CourseGen</h2>
                            <hr style={{ borderTop: '2px gray solid', borderRadius: '100px' }} />
                            <ol className='how-to-use'>
                                <li style={{ marginBottom: '12px' }}>Enter your course topic in the input above.</li>
                                <li style={{ marginBottom: '12px' }}>Press Generate!</li>
                                <li style={{ marginBottom: '12px' }}>Watch the right side of the screen to see the progress of generating your course.</li>
                                <li>Press view once completed!</li>
                            </ol>
                        </div>
                        <div style={{ border: '2px lightgray solid', borderRadius: '5px', padding: '15px', display: 'flex', 'justifyContent': 'center', 'alignItems': 'center', flexDirection: 'column' }}>
                            <p style={{ marginTop: '10px', fontSize: '30px', fontWeight: '500' }}>&copy; Copyright CourseGen 2024</p>
                        </div>
                    </div>
                    <div className='col-sm' style={{ border: '2px lightgray solid', borderRadius: '5px', padding: '15px 15px' }}>
                        <h2>Progress</h2>
                        <hr style={{ borderTop: '2px gray solid', borderRadius: '100px' }} />
                        <div style={{ paddingLeft: '20px', paddingRight: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            {videoUrls && videoUrls.map((video, index) => {
                                return (
                                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                        <p style={{ fontSize: '20px', fontWeight: '500' }}>Video {index + 1}</p>
                                        {videoData[index] ? <IoCheckmarkOutline size={30} /> : !videoData[index] && index !== 0 && videoData[index - 1] ? <AiOutlineLoading size={30} className='loading' /> : index === 0 && !videoData[0] ? <AiOutlineLoading size={30} className='loading' /> : <BiCircle size={30} fill='darkgray' />}
                                    </div>
                                )
                            })}
                            {loadingDone && <button onClick={() => navigate('/viewCourse', { replace: true, state: { urls: videoUrls, questions: videoData, } })} style={{ backgroundColor: '#9900FF', padding: '5px', fontSize: '20px', border: 'none', borderRadius: '5px', color: 'white', paddingLeft: '10px', paddingRight: '10px', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>View Course</button>}
                        </div>
                    </div>
                    
                    <div style={{ border: '2px lightgray solid', paddingTop: '10px', marginTop: '20px', borderRadius: '5px', marginLeft: '10px', padding: '15px 15px', marginBottom: '30px', paddingLeft: '10px' }}>
                        <h2>Why CourseGen?</h2>
                        <hr style={{ borderTop: '2px gray solid', borderRadius: '100px' }} />
                        <p>The monetization of education has affected countless people around the world, discouraging them from truly pushing themselves to learn what they want to learn. CourseGen breaks down this barrier with its accessibility and robust catalog of specially curated and personalized material to satisfy any and everyone’s learning desires completely free of cost.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
