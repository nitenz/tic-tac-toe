import React from "react";

import './board.styles.scss';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player: 'X',
            board: ['','','','','','','','',''],
            win: false,
            playerWin:''
        };

        this.handleClick = this.handleClick.bind(this);
    }   

    componentDidMount () {
     
    }

    handleClick = (evt) =>{
        const playCellPostion = evt.currentTarget.getAttribute('data');
        var auxBoard = Object.assign([], this.state.board);
        var nextPlayer = '';

        
        if(this.state.board[playCellPostion].length === 0 && !this.state.win ){
            auxBoard[playCellPostion] = this.state.player;
            nextPlayer = this.state.player === 'X' ? 'O' : 'X';

            this.setState({board: auxBoard,player: nextPlayer});

            validateWin(auxBoard,this);
        }

        function validateWin(auxBoard,context){
            var teste= [];
            var win = false;
            var player = '';
            for(var i=0;i<=2;i++){
                teste.push(auxBoard.slice(i*3,3+(i*3)));
            }

           //row
           if(teste[0][0] !== '' && teste[0][1] !== '' && teste[0][2] !== '' ){
                if(teste[0][0]===teste[0][1] && teste[0][1]===teste[0][2]){
                    win = true;
                    player = teste[0][0];
                }
            }
            
            //row
            if(teste[1][0] !== '' && teste[1][1] !== '' && teste[1][2] !== ''){
                if( teste[1][0]===teste[1][1] && teste[1][1]===teste[1][2] ){
                    win = true;
                    player = teste[1][0];
                }
            }
            
            //row
            if( teste[2][0]!== '' && teste[2][1] !== '' && teste[2][2] !== '' ){
                if(teste[2][0]===teste[2][1] && teste[2][1]===teste[2][2]  ){
                    win = true;
                    player = teste[2][0];
                }
            }

             //collumn
            if( teste[0][0]!== '' && teste[1][0] !== '' && teste[2][0] !== '' ){
                if( teste[0][0]===teste[1][0] && teste[1][0]===teste[2][0]  ){
                    win = true;
                    player = teste[0][0];
                }
            }  
             //collumn
            if( teste[0][1]!== '' && teste[1][1] !== '' && teste[2][1] !== '' ){
                if(teste[0][1]===teste[1][1] && teste[1][1]===teste[2][1] ){
                    win = true;
                    player = teste[0][1];
                }
            }          
            //collumn
            if(  teste[0][2] !== '' && teste[1][2] !== '' && teste[2][2] !== '' ){
                if( teste[0][2]===teste[1][2] && teste[1][2]===teste[2][2]){
                    win = true;
                    player = teste[0][2];
                }
            }

            //diagonal
            if( teste[0][0] !== '' && teste[1][1] !== '' && teste[2][2] !== '' && teste[0][2] !== '' && teste[1][1] !== '' && teste[2][0] !== ''){
                if(teste[0][0] === teste[1][1]  && teste[1][1]=== teste[2][2] ){
                    win = true;
                    player = teste[0][0];
                }
                if(teste[0][2]===teste[1][1] && teste[1][1]===teste[2][0]){
                    win = true;
                    player = teste[0][2];
                }
            }

            if(win){
                context.setState({win: win, playerWin:player})
            }
        }
    }

    render() {
     
        return (
            <div className="board-container">
                <span>Player {this.state.player} is playing</span>

                <div className="board-rows">
                    <div onClick={this.handleClick} className="board-cells first-cell" data="0" >
                        <span>{this.state.board[0]}</span>
                    </div>
                    <div onClick={this.handleClick} className="board-cells" data="1">
                    <span>{this.state.board[1]}</span>
                    </div>
                    <div onClick={this.handleClick} className="board-cells" data="2">
                        <span>{this.state.board[2]}</span>
                    </div>
                </div>

                <div className="board-rows"> 
                    <div onClick={this.handleClick} className="board-cells first-cell" data="3">
                        <span>{this.state.board[3]}</span>
                    </div>
                    <div onClick={this.handleClick} className="board-cells" data="4">
                        <span>{this.state.board[4]}</span>
                    </div>
                    <div onClick={this.handleClick} className="board-cells" data="5">
                        <span>{this.state.board[5]}</span>
                    </div>
                </div>

                <div className="board-rows"> 
                    <div onClick={this.handleClick} className="board-cells first-cell last-row" data="6">
                        <span>{this.state.board[6]}</span>
                    </div>
                    <div onClick={this.handleClick} className="board-cells last-row" data="7">
                        <span>{this.state.board[7]}</span>
                    </div>
                    <div onClick={this.handleClick} className="board-cells last-row" data="8">
                        <span>{this.state.board[8]}</span>
                    </div>
                </div>

                {
                    this.state.win ? <span>Player {this.state.playerWin} WON!!!!</span> : ''
                }
            </div>
        );
    }
}
export default Board;