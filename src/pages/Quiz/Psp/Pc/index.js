import './styles.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Quiz from 'react-quiz-component';


import dudh from './dudh.json';
import crp from './crp.json';
import cg from './culturaGeral.json'

import estatutos from './estatutos.json'
import leiOrganica from './leiOrganica.json'
import testeg1 from './teste1.json'
import testeg2 from './teste2.json'
import testeg3 from './teste3.json'






export default function PspPc() {
    const [showQuiz1, setShowQuiz1] = useState(false);
    const [showQuiz2, setShowQuiz2] = useState(false);
    const [showQuiz3, setShowQuiz3] = useState(false);
    const [showQuiz4, setShowQuiz4] = useState(false);
    const [showQuiz5, setShowQuiz5] = useState(false);
    const [showQuiz6, setShowQuiz6] = useState(false);
    const [showQuiz7, setShowQuiz7] = useState(false);
    const [showQuiz8, setShowQuiz8] = useState(false);

    const handleQuiz1Complete = () => {
        setShowQuiz1(false);
    };

    const handleQuiz2Complete = () => {
        setShowQuiz2(false);
    };

    const handleQuiz3Complete = () => {
        setShowQuiz1(false);
    };

    const handleQuiz4Complete = () => {
        setShowQuiz1(false);
    };

    const handleQuiz5Complete = () => {
        setShowQuiz1(false);
    };

    const handleQuiz6Complete = () => {
        setShowQuiz1(false);
    };

    const handleQuiz7Complete = () => {
        setShowQuiz1(false);
    };

    const handleQuiz8Complete = () => {
        setShowQuiz1(false);
    };



    const openQuiz1 = () => {
        setShowQuiz1(true);
        setShowQuiz2(false);
        setShowQuiz3(false);
        setShowQuiz4(false);
        setShowQuiz5(false);
        setShowQuiz6(false);
        setShowQuiz7(false);
        setShowQuiz8(false);
    };

    const openQuiz2 = () => {
        setShowQuiz1(false);
        setShowQuiz2(true);
        setShowQuiz3(false);
        setShowQuiz4(false);
        setShowQuiz5(false);
        setShowQuiz6(false);
        setShowQuiz7(false);
        setShowQuiz8(false);
    };

    const openQuiz3 = () => {
        setShowQuiz1(false);
        setShowQuiz2(false);
        setShowQuiz3(true);
        setShowQuiz4(false);
        setShowQuiz5(false);
        setShowQuiz6(false);
        setShowQuiz7(false);
        setShowQuiz8(false);
    };

    const openQuiz4 = () => {
        setShowQuiz1(false);
        setShowQuiz2(false);
        setShowQuiz3(false);
        setShowQuiz4(true);
        setShowQuiz5(false);
        setShowQuiz6(false);
        setShowQuiz7(false);
        setShowQuiz8(false);
    };

    const openQuiz5 = () => {
        setShowQuiz1(false);
        setShowQuiz2(false);
        setShowQuiz3(false);
        setShowQuiz4(false);
        setShowQuiz5(true);
        setShowQuiz6(false);
        setShowQuiz7(false);
        setShowQuiz8(false);
    };

    const openQuiz6 = () => {
        setShowQuiz1(false);
        setShowQuiz2(false);
        setShowQuiz3(false);
        setShowQuiz4(false);
        setShowQuiz5(false);
        setShowQuiz6(true);
        setShowQuiz7(false);
        setShowQuiz8(false);
    };

    const openQuiz7 = () => {
        setShowQuiz1(false);
        setShowQuiz2(false);
        setShowQuiz3(false);
        setShowQuiz4(false);
        setShowQuiz5(false);
        setShowQuiz6(false);
        setShowQuiz7(true);
        setShowQuiz8(false);
    };

    const openQuiz8 = () => {
        setShowQuiz1(false);
        setShowQuiz2(false);
        setShowQuiz3(false);
        setShowQuiz4(false);
        setShowQuiz5(false);
        setShowQuiz6(false);
        setShowQuiz7(false);
        setShowQuiz8(true);
    };


    return (
        <div className="quiz">
            <h1 className='title'>Prova de Conhecimentos - PSP</h1>
            <Link to={'/pspmenu'}> Voltar </Link>

            <div className='quizContainer'>
            
                {showQuiz1 && (
                    <div className='quizGame'>
                        
                        <Quiz 
                            quiz={crp} 
                            shuffle={true} 
                            shuffleAnswers={true} 
                            showInstantFeedback={true}
                            onComplete={handleQuiz1Complete}
                            
                        />
                        <button id='btn' onClick={() => setShowQuiz1(false)}>Sair</button>
                    </div>
                )}

                {!showQuiz1 && !showQuiz2 && !showQuiz3 && !showQuiz4 && !showQuiz5 && !showQuiz6 && !showQuiz7 && !showQuiz8 &&(
                    <button id='btn' onClick={openQuiz1}>Constituição da Republica Portuguesa</button>
                )}

                {showQuiz2 && (
                    <div>
                        <Quiz 
                            quiz={cg} 
                            shuffle={true} 
                            shuffleAnswers={true} 
                            showInstantFeedback={true}
                            onComplete={handleQuiz2Complete}
                        />
                        <button id='btn' onClick={() => setShowQuiz2(false)}>Sair</button>
                    </div>
                )}

                {!showQuiz1 && !showQuiz2 && !showQuiz3 && !showQuiz4 && !showQuiz5 && !showQuiz6 && !showQuiz7 && !showQuiz8 && (
                    <button id='btn' onClick={openQuiz2}>Cultura Geral</button>
                )}

                {showQuiz3 && (
                    <div>
                        <Quiz 
                            quiz={dudh} 
                            shuffle={true} 
                            shuffleAnswers={true} 
                            showInstantFeedback={true}
                            onComplete={handleQuiz3Complete}
                        />
                        <button id='btn' onClick={() => setShowQuiz3(false)}>Sair</button>
                    </div>
                )}

                {!showQuiz1 && !showQuiz2 && !showQuiz3 && !showQuiz4 && !showQuiz5 && !showQuiz6 && !showQuiz7 && !showQuiz8 && (
                    <button id='btn' onClick={openQuiz3}>Declaração Universal dos Direitos Humanos</button>
                )}

                {showQuiz4 && (
                    <div>
                        <Quiz 
                            quiz={estatutos} 
                            shuffle={true} 
                            shuffleAnswers={true} 
                            showInstantFeedback={true}
                            onComplete={handleQuiz4Complete}
                        />
                        <button id='btn' onClick={() => setShowQuiz4(false)}>Sair</button>
                    </div>
                )}

                {!showQuiz1 && !showQuiz2 && !showQuiz3 && !showQuiz4 && !showQuiz5 && !showQuiz6 && !showQuiz7 && !showQuiz8 && (
                    <button id='btn' onClick={openQuiz4}>Estatutos</button>
                )}

                {showQuiz5 && (
                    <div>
                        <Quiz 
                            quiz={leiOrganica} 
                            shuffle={true} 
                            shuffleAnswers={true} 
                            showInstantFeedback={true}
                            onComplete={handleQuiz5Complete}
                        />
                        <button id='btn' onClick={() => setShowQuiz5(false)}>Sair</button>
                    </div>
                )}

                {!showQuiz1 && !showQuiz2 && !showQuiz3 && !showQuiz4 && !showQuiz5 && !showQuiz6 && !showQuiz7 && !showQuiz8 && (
                    <button id='btn' onClick={openQuiz5}>Lei Orgânica</button>
                )}

                {showQuiz6 && (
                    <div>
                        <Quiz 
                            quiz={testeg1}      // Linha 314 do teste geral 1
                            shuffle={true} 
                            shuffleAnswers={true} 
                            showInstantFeedback={true}
                            onComplete={handleQuiz6Complete}
                        />
                        <button id='btn' onClick={() => setShowQuiz6(false)}>Sair</button>
                    </div>
                )}

                {!showQuiz1 && !showQuiz2 && !showQuiz3 && !showQuiz4 && !showQuiz5 && !showQuiz6 && !showQuiz7 && !showQuiz8 && (
                    <button id='btn' onClick={openQuiz6}>Teste Geral (1)</button>
                )}

                {showQuiz7 && (
                    <div>
                        <Quiz 
                            quiz={testeg2} 
                            shuffle={true} 
                            shuffleAnswers={true} 
                            showInstantFeedback={true}
                            onComplete={handleQuiz7Complete}
                        />
                        <button id='btn' onClick={() => setShowQuiz7(false)}>Sair</button>
                    </div>
                )}

                {!showQuiz1 && !showQuiz2 && !showQuiz3 && !showQuiz4 && !showQuiz5 && !showQuiz6 && !showQuiz7 && !showQuiz8 && (
                    <button id='btn' onClick={openQuiz7}>Teste Geral (2)</button>
                )}

                {showQuiz8 && (
                    <div>
                        <Quiz 
                            quiz={testeg3} 
                            shuffle={true} 
                            shuffleAnswers={true} 
                            showInstantFeedback={true}
                            onComplete={handleQuiz8Complete}
                        />
                        <button id='btn' onClick={() => setShowQuiz8(false)}>Sair</button>
                    </div>
                )}

                {!showQuiz1 && !showQuiz2 && !showQuiz3 && !showQuiz4 && !showQuiz5 && !showQuiz6 && !showQuiz7 && !showQuiz8 && (
                    <button id='btn' onClick={openQuiz8}>Teste Geral (3)</button>
                )}
            </div>
        </div>
    );
}
