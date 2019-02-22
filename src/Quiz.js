import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';

class Quiz extends Component {

    constructor(props) {
        super()
        this.state = { 
            questions: ["quest1", "quest2","quest3","quest4","quest5",
                        "quest1a", "quest2a","quest3a","quest4a","quest5a",
                        "quest1b", "quest2b","quest3b","quest4b","quest5b",
                        "quest1c", "quest2c","quest3c","quest4c","quest5c",
                        "quest1d", "quest2d","quest3d","quest4d","quest5d"],
            currentQuestion: 0,
            answerPoints: [],
            open: false
        };

        this.pointsByField = [0,0,0,0,0,0,0,0,0];

        this.EASPfactor = 0;
        this.EASPfactorTitle = [
            { nome: "Apaixonado", easp: "emotivo - ativo - secundário"},
            { nome: "Colérico", easp: "emotivo - ativo - primário"},
            { nome: "Sentimental", easp: "emotivo - não-ativo - secundário"},
            { nome: "Nervoso", easp: "emotivo - não-ativo - primário"},
            { nome: "Fleumático", easp: "não emotivo - ativo - secundário"},
            { nome: "Sanguíneo", easp: "emotivo - ativo - primário"},
            { nome: "Apático", easp: "emotivo - não ativo - secundário"},
            { nome: "Amorfo", easp: "emotivo - não ativo - primário"}
        ]

        this.type = 0;

        this.EASPfactorDescription = [

        ]

        this.fields = ["Emotividade",
                        "Atividade;",
                        "Secundariedade;",
                        "Amplitude do campo de consciência",
                        "Polaridade; Marte/Vênus",
                        "Avidez",
                        "Interesses sensoriais",
                        "Ternura",
                        "Paixão intelectual"];

        this.scoreByfield = [];

        this.handleChoice = this.handleChoice.bind(this);
        this.computeAnswer = this.computeAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.showFinishedModal = this.showFinishedModal.bind(this);
        this.distributePoints = this.distributePoints.bind(this);
        this.getEASPfactor = this.getEASPfactor.bind(this);
        this.getByFieldScore = this.getByFieldScore.bind(this);
        this.getType = this.getType.bind(this);
    }

    handleChoice(answer) {
        this.computeAnswer(answer);
        this.nextQuestion();
    }

    computeAnswer(answer) {
        let npontuation = this.state.answerPoints;
        npontuation.push(answer);
        this.setState({answerPoints: npontuation});
    }

    nextQuestion() {
        const nq = this.state.currentQuestion + 1;
        if (nq < this.state.questions.length) {
            this.setState({currentQuestion: nq});
        } else {
            this.distributePoints();
            this.getByFieldScore();
            this.getEASPfactor();
            this.getType();
            this.showFinishedModal();
        }
    }

    distributePoints() {
        let counter = 0;
        for (let point in this.state.answerPoints) {
            this.pointsByField[counter] =+ point;
            if (counter < 8 ) {
                counter++;
            } else {
                counter = 0;
            }
        }
        console.log("pontos distribuidos - " + this.pointsByField);
    }

    getEASPfactor() {
        if (this.pointsByField[0] > 45) {
            this.EASPfactor += 5;
        } else {
            this.EASPfactor += 10; 
        }
        if (this.pointsByField[1] > 45) {
            this.EASPfactor += 0;	 
        } else { 
            this.EASPfactor += 15;
        }
        if (this.pointsByField[2] > 45) {
            this.EASPfactor += 3;
        } else { 
            this.EASPfactor += 1;
        }
    }

    getByFieldScore() {
        for (let field of this.pointsByField) {
            this.scoreByfield.push(((field/90)*100).toFixed(0));
        }
        console.log("Score fields set - " + this.scoreByfield);
    }

    getType() {
        switch (this.EASPfactor) {
            case 8:
                this.type = 0;
                break;
            case 6:
                this.type = 1;
                break;
            case 23:
                this.type = 2;
                break;
            case 31:
                this.type = 3;
                break;
            case 13:
                this.type = 4;
                break;
            case 11:
                this.type = 5;
                break;
            case 28:
                this.type = 6;
                break;
            case 26:
                this.type = 7;
                break;
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
                    <h4>Você é {this.EASPfactorTitle[this.type].easp}.</h4>
                    <h3>Tipo <strong>{this.EASPfactorTitle[this.type].nome.toLocaleUpperCase()}</strong></h3>
                </Dialog>
            </div>
        );
    }
}

export default Quiz;