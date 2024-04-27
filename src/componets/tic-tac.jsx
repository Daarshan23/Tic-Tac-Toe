import useTicTacToe from './hooks/TicTac';

function TicTac() {
  const { board, handleClick,restGame, getStatusMessage } =
    useTicTacToe();
  return (
    <>
      <div className="game">
        <div className="status">
          {getStatusMessage()}
          <button className="reset-button" onClick={restGame}>
            Reset Game
          </button>
        </div>
        <div className="board">
          {board.map((b, index) => {
            return (
              <button
                className="cell"
                key={index}
                onClick={() => handleClick(index)}
                disabled={b!==null}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>
      <div className='thank'>Thank You For Playing Tic-Tac-Toe Develop by <a href="https://dj-dev-portfolioo.web.app/" >@DjDev</a> </div>
    </>
  );
}

export default TicTac;
