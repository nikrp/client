import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

export default function ViewCourse() {
    const params = useLocation().state;
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [questionOneChoice, setQuestionOneChoice] = useState(0);
    const [questionTwoChoice, setQuestionTwoChoice] = useState(0);
    const [questionThreeChoice, setQuestionThreeChoice] = useState(0);
    const [questionFourChoice, setQuestionFourChoice] = useState(0);
    console.log(params.questions);

    function checkAnswers() {
        let data = {};
        if (questionOneChoice === 0) {
            data['Question 1'] = 'Correct';
        } else {
            data['Question 1'] = 'Wrong';
        }
        
        if (questionTwoChoice === 0) {
            data['Question 2'] = 'Correct';
        } else {
            data['Question 2'] = 'Wrong';
        }

        if (questionThreeChoice === 0) {
            data['Question 3'] = 'Correct';
        } else {
            data['Question 3'] = 'Wrong';
        }

        if (questionFourChoice === 0) {
            data['Question 4'] = 'Correct';
        } else {
            data['Question 4'] = 'Wrong';
        }

        alert(JSON.stringify(data, null, 2));
    }

    return (
        <div>
            <div className="container">
                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="fluid">
                        <h1 style={{ fontWeight: '500', fontSize: '24px', color: 'black' }}>Course View</h1>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '50px' }}>
                    <div className="col-sm">
                        <div style={{ position: "fixed", top: '140px', left: '90px', width: '600px' }}>
                            <iframe src={`https://youtube.com/embed/${params.urls[currentVideoIndex].split('v=')[1]}`} title={params.urls[currentVideoIndex]} width={600} height={300} style={{ borderRadius: '10px' }} />
                            <button className="btn btn-dark" style={{ marginTop: '40px', width: '100%' }} onClick={() => setCurrentVideoIndex((prevIndex) => prevIndex + 1)}>Next Video</button>
                        </div>
                    </div>
                    <div className="col-sm" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <div key={0} style={{ borderRadius: '10px', boxShadow: '1px 3px 10px gray', marginBottom: '20px', 'padding': '15px 15px' }}>
                                    <p style={{ fontSize: '20px', fontWeight: '500' }}>{Object.keys(params.questions[0])[0]}</p>
                                    <hr/>
                                    <p className="answer-choice" onClick={() => setQuestionOneChoice(0)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionOneChoice === 0 ? 'black' : 'white', color: questionOneChoice === 0 ? 'white' : 'black' }}>{params.questions[0][Object.keys(params.questions[0])[currentVideoIndex]][0]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionOneChoice(1)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionOneChoice === 1 ? 'black' : 'white', color: questionOneChoice === 1 ? 'white' : 'black' }}>{params.questions[0][Object.keys(params.questions[0])[currentVideoIndex]][1]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionOneChoice(2)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionOneChoice === 2 ? 'black' : 'white', color: questionOneChoice === 2 ? 'white' : 'black' }}>{params.questions[0][Object.keys(params.questions[0])[currentVideoIndex]][2]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionOneChoice(3)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionOneChoice === 3 ? 'black' : 'white', color: questionOneChoice === 3 ? 'white' : 'black' }}>{params.questions[0][Object.keys(params.questions[0])[currentVideoIndex]][3]}</p>
                                </div>
                                <div key={1} style={{ borderRadius: '10px', boxShadow: '1px 3px 10px gray', marginBottom: '20px', 'padding': '15px 15px' }}>
                                    <p style={{ fontSize: '20px', fontWeight: '500' }}>{Object.keys(params.questions[1])[0]}</p>
                                    <hr/>
                                    <p className="answer-choice" onClick={() => setQuestionTwoChoice(0)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionTwoChoice === 0 ? 'black' : 'white', color: questionTwoChoice === 0 ? 'white' : 'black' }}>{params.questions[1][Object.keys(params.questions[1])[currentVideoIndex]][0]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionTwoChoice(1)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionTwoChoice === 1 ? 'black' : 'white', color: questionTwoChoice === 1 ? 'white' : 'black' }}>{params.questions[1][Object.keys(params.questions[1])[currentVideoIndex]][1]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionTwoChoice(2)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionTwoChoice === 2 ? 'black' : 'white', color: questionTwoChoice === 2 ? 'white' : 'black' }}>{params.questions[1][Object.keys(params.questions[1])[currentVideoIndex]][2]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionTwoChoice(3)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionTwoChoice === 3 ? 'black' : 'white', color: questionTwoChoice === 3 ? 'white' : 'black' }}>{params.questions[1][Object.keys(params.questions[1])[currentVideoIndex]][3]}</p>
                                </div>
                                <div key={2} style={{ borderRadius: '10px', boxShadow: '1px 3px 10px gray', marginBottom: '20px', 'padding': '15px 15px' }}>
                                    <p style={{ fontSize: '20px', fontWeight: '500' }}>{Object.keys(params.questions[2])[0]}</p>
                                    <hr/>
                                    <p className="answer-choice" onClick={() => setQuestionThreeChoice(0)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionThreeChoice === 0 ? 'black' : 'white', color: questionThreeChoice === 0 ? 'white' : 'black' }}>{params.questions[2][Object.keys(params.questions[2])[currentVideoIndex]][0]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionThreeChoice(1)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionThreeChoice === 1 ? 'black' : 'white', color: questionThreeChoice === 1 ? 'white' : 'black' }}>{params.questions[2][Object.keys(params.questions[2])[currentVideoIndex]][1]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionThreeChoice(2)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionThreeChoice === 2 ? 'black' : 'white', color: questionThreeChoice === 2 ? 'white' : 'black' }}>{params.questions[2][Object.keys(params.questions[2])[currentVideoIndex]][2]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionThreeChoice(3)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionThreeChoice === 3 ? 'black' : 'white', color: questionThreeChoice === 3 ? 'white' : 'black' }}>{params.questions[2][Object.keys(params.questions[2])[currentVideoIndex]][3]}</p>
                                </div>
                                <div key={3} style={{ borderRadius: '10px', boxShadow: '1px 3px 10px gray', marginBottom: '20px', 'padding': '15px 15px' }}>
                                    <p style={{ fontSize: '20px', fontWeight: '500' }}>{Object.keys(params.questions[3])[0]}</p>
                                    <hr/>
                                    <p className="answer-choice" onClick={() => setQuestionFourChoice(0)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionFourChoice === 0 ? 'black' : 'white', color: questionFourChoice === 0 ? 'white' : 'black' }}>{params.questions[3][Object.keys(params.questions[3])[currentVideoIndex]][0]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionFourChoice(1)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionFourChoice === 1 ? 'black' : 'white', color: questionFourChoice === 1 ? 'white' : 'black' }}>{params.questions[3][Object.keys(params.questions[3])[currentVideoIndex]][1]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionFourChoice(2)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionFourChoice === 2 ? 'black' : 'white', color: questionFourChoice === 2 ? 'white' : 'black' }}>{params.questions[3][Object.keys(params.questions[3])[currentVideoIndex]][2]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionFourChoice(3)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionFourChoice === 3 ? 'black' : 'white', color: questionFourChoice === 3 ? 'white' : 'black' }}>{params.questions[3][Object.keys(params.questions[3])[currentVideoIndex]][3]}</p>
                                </div>

                                <button onClick={checkAnswers} className="btn btn-primary">Check</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

