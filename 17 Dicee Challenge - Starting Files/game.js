function rollDie(){
    var dieScore;
    dieScore = Math.floor(Math.random() * 6) + 1;
    return dieScore;
}

const pageAccessedByReload = (
    (window.performance.navigation && window.performance.navigation.type === 1) ||
      window.performance
        .getEntriesByType('navigation')
        .map((nav) => nav.type)
        .includes('reload')
  );

if(pageAccessedByReload == true){
    var player1Score, player2Score;
    player1Score = rollDie();
    player2Score = rollDie();
    document.querySelector(".img1").setAttribute("src", "./images/dice" + player1Score + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + player2Score + ".png");
    if(player1Score > player2Score){
        document.querySelector("h1").textContent = "Player 1 wins";
        
    } else if(player1Score < player2Score){
        document.querySelector("h1").textContent = "Player 2 wins";
    }
    else if(player1Score === player2Score){
        document.querySelector("h1").textContent = "Draw";
    }
}