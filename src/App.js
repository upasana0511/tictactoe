import {useEffect, useState} from "react"
import Cell from "./components/Cell"
const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState(null)

    const message = "It is now " + go + "'s go."

    const checkScore = () => {
      const winningCombos = [
          [0, 1, 2], [3, 4, 5],
          [6, 7, 8], [0, 3, 6],
          [1 ,4, 7], [2, 5, 8],
          [0, 4, 8], [2, 4, 6]
      ]
        winningCombos.forEach(array =>{
            let circleWins = array.every(cell => cells[cell] === "circle")
            if(circleWins) {
                setWinningMessage("Circle Wins!")
                return
            }
        })
        winningCombos.forEach(array =>{
            let crossWins = array.every(cell => cells[cell] === "cross")
            if(crossWins) {
                setWinningMessage("cross Wins!")
                return
            }
        })
    }

    useEffect(() => {
            checkScore()
    }, [cells]);

    const resetGame = () => {
        setCells(["", "", "", "", "", "", "", "", ""]);
        setGo("circle");
        setWinningMessage(null);
    };

    return (
        <div className="app">
            <h1 className="heading">TIC-TAC-TOE</h1>
            <div className="gameboard">
                {cells.map((cell, index) => (
                    <Cell
                        key={index}
                        id={index}
                        cell={cell}
                        go={go}
                        setGo={setGo}
                        cells={cells}
                        setCells={setCells}
                        winningMessage={winningMessage}
                    />
                ))}
            </div>
            <p>{winningMessage || message}</p>
            {winningMessage && <button className="play-again-button" onClick={resetGame}>Play Again</button>}
            <div className="footer">
                Created by Upasana Bhatt
            </div>
        </div>
    );

}

export default App;
