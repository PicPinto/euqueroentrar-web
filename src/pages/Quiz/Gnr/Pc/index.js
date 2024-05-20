import './stylesgnr.css'
import React, { useState } from 'react';
import Quiz from 'react-quiz-component';
import quizData from './quiz.json';
import quizData2 from './quiz2.json';
import { Link } from 'react-router-dom';

export default function GnrPc() {
    const [showQuiz1, setShowQuiz1] = useState(false);
    const [showQuiz2, setShowQuiz2] = useState(false);

    const handleQuiz1Complete = () => {
        setShowQuiz1(false);
    };

    const handleQuiz2Complete = () => {
        setShowQuiz2(false);
    };

    const openQuiz1 = () => {
        setShowQuiz1(true);
        setShowQuiz2(false);
    };

    const openQuiz2 = () => {
        setShowQuiz1(false);
        setShowQuiz2(true);
    };

    return (
        <div className="quiz">
            <h1>Quiz Page</h1>
            <Link id='btn' to={'/gnrmenu'}> Voltar </Link>
            
            {showQuiz1 && (
                <div>
                    <Quiz 
                        quiz={quizData} 
                        shuffle={true} 
                        shuffleAnswers={true} 
                        showInstantFeedback={true}
                        onComplete={handleQuiz1Complete}
                    />
                    <button id='btn' onClick={() => setShowQuiz1(false)}>Close Quiz 1</button>
                </div>
            )}

            {!showQuiz1 && !showQuiz2 && (
                <button id='btn' onClick={openQuiz1}>Open Quiz 1</button>
            )}

            {showQuiz2 && (
                <div>
                    <Quiz 
                        quiz={quizData2} 
                        shuffle={true} 
                        shuffleAnswers={true} 
                        showInstantFeedback={true}
                        onComplete={handleQuiz2Complete}
                    />
                    <button id='btn' onClick={() => setShowQuiz2(false)}>Close Quiz 2</button>
                </div>
            )}

            {!showQuiz2 && !showQuiz1 && (
                <button id='btn' onClick={openQuiz2}>Open Quiz 2</button>
            )}
        </div>
    );
}
