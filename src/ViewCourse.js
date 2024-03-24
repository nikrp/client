import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

export default function ViewCourse() {
    const params = useLocation().state;
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [questionOneChoice, setQuestionOneChoice] = useState(0);
    const [questionTwoChoice, setQuestionTwoChoice] = useState(0);
    const [questionThreeChoice, setQuestionThreeChoice] = useState(0);
    const [questionFourChoice, setQuestionFourChoice] = useState(0);

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
                    <div className="col-sm">
                        <iframe src={`https://youtube.com/embed/${params.urls[currentVideoIndex].split('v=')[1]}`} title={params.urls[currentVideoIndex]} width={700} height={400} />
                        </div>
                    <div className="col-sm" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <div key={0} style={{ borderRadius: '10px', boxShadow: '1px 3px 10px gray', marginBottom: '20px', 'padding': '15px 15px' }}>
                                    <p style={{ fontSize: '20px', fontWeight: '500' }}>{Object.keys(params.questions[0])[0]}</p>
                                    <hr/>
                                    <p className="answer-choice" onClick={() => setQuestionOneChoice(0)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionOneChoice === 0 ? 'black' : 'white', color: questionOneChoice === 0 ? 'white' : 'black' }}>{params.questions[0][Object.keys(params.questions[0])[0]][0]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionOneChoice(1)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionOneChoice === 1 ? 'black' : 'white', color: questionOneChoice === 1 ? 'white' : 'black' }}>{params.questions[0][Object.keys(params.questions[0])[0]][1]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionOneChoice(2)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionOneChoice === 2 ? 'black' : 'white', color: questionOneChoice === 2 ? 'white' : 'black' }}>{params.questions[0][Object.keys(params.questions[0])[0]][2]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionOneChoice(3)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionOneChoice === 3 ? 'black' : 'white', color: questionOneChoice === 3 ? 'white' : 'black' }}>{params.questions[0][Object.keys(params.questions[0])[0]][3]}</p>
                                </div>
                                <div key={1} style={{ borderRadius: '10px', boxShadow: '1px 3px 10px gray', marginBottom: '20px', 'padding': '15px 15px' }}>
                                    <p style={{ fontSize: '20px', fontWeight: '500' }}>{Object.keys(params.questions[1])[0]}</p>
                                    <hr/>
                                    <p className="answer-choice" onClick={() => setQuestionTwoChoice(0)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionTwoChoice === 0 ? 'black' : 'white', color: questionTwoChoice === 0 ? 'white' : 'black' }}>{params.questions[1][Object.keys(params.questions[1])[0]][0]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionTwoChoice(1)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionTwoChoice === 1 ? 'black' : 'white', color: questionTwoChoice === 1 ? 'white' : 'black' }}>{params.questions[1][Object.keys(params.questions[1])[0]][1]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionTwoChoice(2)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionTwoChoice === 2 ? 'black' : 'white', color: questionTwoChoice === 2 ? 'white' : 'black' }}>{params.questions[1][Object.keys(params.questions[1])[0]][2]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionTwoChoice(3)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionTwoChoice === 3 ? 'black' : 'white', color: questionTwoChoice === 3 ? 'white' : 'black' }}>{params.questions[1][Object.keys(params.questions[1])[0]][3]}</p>
                                </div>
                                <div key={2} style={{ borderRadius: '10px', boxShadow: '1px 3px 10px gray', marginBottom: '20px', 'padding': '15px 15px' }}>
                                    <p style={{ fontSize: '20px', fontWeight: '500' }}>{Object.keys(params.questions[2])[0]}</p>
                                    <hr/>
                                    <p className="answer-choice" onClick={() => setQuestionThreeChoice(0)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionThreeChoice === 0 ? 'black' : 'white', color: questionThreeChoice === 0 ? 'white' : 'black' }}>{params.questions[2][Object.keys(params.questions[2])[0]][0]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionThreeChoice(1)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionThreeChoice === 1 ? 'black' : 'white', color: questionThreeChoice === 1 ? 'white' : 'black' }}>{params.questions[2][Object.keys(params.questions[2])[0]][1]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionThreeChoice(2)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionThreeChoice === 2 ? 'black' : 'white', color: questionThreeChoice === 2 ? 'white' : 'black' }}>{params.questions[2][Object.keys(params.questions[2])[0]][2]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionThreeChoice(3)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionThreeChoice === 3 ? 'black' : 'white', color: questionThreeChoice === 3 ? 'white' : 'black' }}>{params.questions[2][Object.keys(params.questions[2])[0]][3]}</p>
                                </div>
                                <div key={3} style={{ borderRadius: '10px', boxShadow: '1px 3px 10px gray', marginBottom: '20px', 'padding': '15px 15px' }}>
                                    <p style={{ fontSize: '20px', fontWeight: '500' }}>{Object.keys(params.questions[3])[0]}</p>
                                    <hr/>
                                    <p className="answer-choice" onClick={() => setQuestionFourChoice(0)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionFourChoice === 0 ? 'black' : 'white', color: questionFourChoice === 0 ? 'white' : 'black' }}>{params.questions[3][Object.keys(params.questions[3])[0]][0]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionFourChoice(1)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionFourChoice === 1 ? 'black' : 'white', color: questionFourChoice === 1 ? 'white' : 'black' }}>{params.questions[3][Object.keys(params.questions[3])[0]][1]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionFourChoice(2)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionFourChoice === 2 ? 'black' : 'white', color: questionFourChoice === 2 ? 'white' : 'black' }}>{params.questions[3][Object.keys(params.questions[3])[0]][2]}</p>
                                    <p className="answer-choice" onClick={() => setQuestionFourChoice(3)} style={{ padding: '7px 7px', border: '1px solid black', borderRadius: '5px', background: questionFourChoice === 3 ? 'black' : 'white', color: questionFourChoice === 3 ? 'white' : 'black' }}>{params.questions[3][Object.keys(params.questions[3])[0]][3]}</p>
                                </div>

                                <button onClick={checkAnswers} className="btn btn-primary">Check</button>
                    </div>
                </div>
            </div>
            <div className="container w-100">
                <h2>Make a Choice (Only One)</h2>
                <form >
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="choice1" id="choice1" name="choice" />
                            <label className="form-check-label" for="choice1">Choice 1</label>
                    </div>
                    <div class="form-check">
                    <input className="form-check-input" type="radio" value="choice2" id="choice2" name="choice" />
                        <label className="form-check-label" for="choice2">Choice 2</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="choice3" id="choice3" name="choice" />
                            <label className="form-check-label" for="choice3">Choice 3</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="choice4" id="choice4" name="choice" />
                            <label className="form-check-label" for="choice4">Choice 4</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg mt-3">Check</button>
                </form>
            </div>
        </div>
    )
}

