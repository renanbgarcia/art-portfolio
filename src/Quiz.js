import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';

class Quiz extends Component {

    constructor(props) {
        super()
        this.state = { 
            questions: ["quest1", "quest2","quest3","quest4","quest5"],
            currentQuestion: 0,
            answerPoints: 0,
            open: false
        };

        this.handleChoice =this.handleChoice.bind(this);
        this.computeAnswer = this.computeAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.showFinishedModal = this.showFinishedModal.bind(this);
    }

    handleChoice(answer) {
        this.computeAnswer(answer);
        this.nextQuestion();
    }

    computeAnswer(answer) {
        const npontuation = this.state.answerPoints + answer;
        this.setState({answerPoints: npontuation});
    }

    nextQuestion() {
        const nq = this.state.currentQuestion + 1;
        if (nq < this.state.questions.length) {
            this.setState({currentQuestion: nq});
        } else {
            this.showFinishedModal();
        }
    }

    showFinishedModal() {
        this.setState({open: true});
    }

    render() {

        let currentQ = this.state.currentQuestion;
        console.log(this.state.answerPoints);

        return (
            <div>
                <p>{ this.state.questions[currentQ] }</p>
                <Button onClick={() => this.handleChoice(0)} variant="contained" color="primary">0</Button>
                <Button onClick={() => this.handleChoice(5)} variant="contained" color="primary">5</Button>
                <Button onClick={() => this.handleChoice(9)} variant="contained" color="primary">9</Button>
                <Dialog open={this.state.open}>
                Resultado
                </Dialog>
            </div>
        );
    }
}

export default Quiz;