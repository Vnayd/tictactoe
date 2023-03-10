import React from 'react'
import Square from './Square'
import './Css/Board.css'

class Board extends React.Component {
    static array = Array(9);
    attempt = 'X';
    //
    compelete = false;
    handleClick = (num) => {
        if(Board.array[num] !== 'O' && Board.array[num] !== 'X') {
            document.getElementById(num).innerHTML = this.attempt;
            Board.array[num] = this.attempt;
            if(this.checkwinnner()) {
                alert("Player : "+this.attempt+" Win");
                this.compelete = true;
            }
            if(this.attempt === 'X') 
                this.attempt = 'O';
            else
                this.attempt = 'X';
            document.getElementById('attempt').innerHTML = "Attempt : "+this.attempt;
            if(this.compelete === true) {
                this.compelete = false;
                this.restart();
            }
        }
    }

    restart = () => {
        for(let i=0; i<9; i++) {
            Board.array[i] = '';
            document.getElementById(i).innerHTML = Board.array[i];
        }
        this.attempt = 'X';
        document.getElementById('attempt').innerHTML = "Attempt : "+this.attempt;
    }

    checkwinnner = () => {
        if(Board.array[0] === this.attempt && Board.array[1] === this.attempt && Board.array[2] === this.attempt) {
            return true;
        } else if(Board.array[3] === this.attempt && Board.array[4] === this.attempt && Board.array[5] === this.attempt) {
            return true;
        } else if(Board.array[6] === this.attempt && Board.array[7] === this.attempt && Board.array[8] === this.attempt) {
            return true;
        } else if(Board.array[0] === this.attempt && Board.array[3] === this.attempt && Board.array[6] === this.attempt) {
            return true;
        } else if(Board.array[1] === this.attempt && Board.array[4] === this.attempt && Board.array[7] === this.attempt) {
            return true;
        } else if(Board.array[2] === this.attempt && Board.array[5] === this.attempt && Board.array[8] === this.attempt) {
            return true;
        } else if(Board.array[0] === this.attempt && Board.array[4] === this.attempt && Board.array[8] === this.attempt) {
            return true;
        } else if(Board.array[2] === this.attempt && Board.array[4] === this.attempt && Board.array[6] === this.attempt) {
            return true;
        }
        
        for(i=0; i<9; i++) {
            if(Board.array[i] === 'X' || Board.array[i] === 'O')
                this.restart();
        }
    }

    render() {
        return (
            <div>
                <div id='attempt'>Attempt : {this.attempt}</div>
                <table align='center'>
                <tbody>
                <tr className='row'>
                    <Square value={0} onclick={()=>this.handleClick(0)}/>
                    <Square value={1} onclick={()=>this.handleClick(1)}/>
                    <Square value={2} onclick={()=>this.handleClick(2)}/>
                </tr>
                <tr className='row'>
                    <Square value={3} onclick={()=>this.handleClick(3)}/>
                    <Square value={4} onclick={()=>this.handleClick(4)}/>
                    <Square value={5} onclick={()=>this.handleClick(5)}/>
                </tr>
                <tr className='row'>
                    <Square value={6} onclick={()=>this.handleClick(6)}/>
                    <Square value={7} onclick={()=>this.handleClick(7)}/>
                    <Square value={8} onclick={()=>this.handleClick(8)}/>
                </tr>
                </tbody>
            </table>
            </div>
        );
    }
}

export default Board;
