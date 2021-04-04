let app;


window.onload = () => {
    app = new PIXI.Application(
        {
            width: 800,
            height: 600,
            backgroundColor: 0xAAAAAA
        }
    );

    document.body.appendChild(app.view);

    //player object
    let player = new PIXI.Sprite.from("images/play.png");
    player.anchor.set(0.5);
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;
    app.stage.addChild(player);

    //mouse interactions
    const movePlayer = (e) => {
        let pos = e.data.global;
        player.x = pos.x;
        player.y = pos.y;
    } 
    
    app.stage.interactive = false;
    app.stage.on("pointermove", movePlayer);

    //keyboard event handlers
    let keys = {};
    let keysDiv;
    const keyDown = (e) => {
        keys[e.keyCode] = true;
    } 

    const keyUp = (e) => {
        keys[e.keyCode] = false;
    }

    const gameLoop = () => {
        keysDiv.innerHTML = JSON.stringify(keys);

        //W
        if(keys["87"]) {
            player.y -= 5;
        }

        //A
        if(keys["65"]) {
            player.x -= 5;
        }

        //S
        if(keys["83"]) {
            player.y += 5;
        }

        //D
        if(keys["68"]) {
            player.x += 5;
        }
    }
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    app.ticker.add(gameLoop);
    keysDiv = document.querySelector("#keys")
}