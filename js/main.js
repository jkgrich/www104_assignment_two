/*=================================================
            Canvas Variables
=================================================*/
var russian_flag = document.getElementById("russia");
var russian_stage = russian_flag.getContext("2d");

var irish_flag = document.getElementById("ireland");
var irish_stage = irish_flag.getContext("2d");

var german_flag = document.getElementById("germany");
var german_stage = german_flag.getContext("2d");

var italian_flag = document.getElementById("italy");
var italian_stage = italian_flag.getContext("2d");

var french_flag = document.getElementById("france");
var french_stage = french_flag.getContext("2d");
/*=================================================
            Canvas Funcations
=================================================*/
russian_stage.fillStyle = "white";
russian_stage.fillRect(0, 0, 300, 50);
russian_stage.fillStyle = "#1199FF";
russian_stage.fillRect(0,50,300,50);
russian_stage.fillStyle = "#E8112D";
russian_stage.fillRect(0,100,300,50);
russian_stage.strokeRect(0,0,300,150);

irish_stage.fillStyle = "green";
irish_stage.fillRect(0, 0, 100, 200);
irish_stage.fillStyle = "orange";
irish_stage.fillRect(200,0,100,200);
irish_stage.strokeRect(0,0,300,150);

german_stage.fillStyle = "black";
german_stage.fillRect(0, 0, 300, 50);
german_stage.fillStyle = "#DD0000";
german_stage.fillRect(0,50,300,50);
german_stage.fillStyle = "#FFCE00";
german_stage.fillRect(0,100,300,50);
russian_stage.strokeRect(0,0,300,150);

italian_stage.fillStyle = "#319400";
italian_stage.fillRect(0, 0, 100, 200);
italian_stage.fillStyle = "#DE2110";
italian_stage.fillRect(200,0,100,200);
italian_stage.strokeRect(0,0,300,150);

french_stage.fillStyle = "#00319C";
french_stage.fillRect(0, 0, 100, 200);
french_stage.fillStyle = "#DE2110";
french_stage.fillRect(200,0,100,200);
french_stage.strokeRect(0,0,300,150);