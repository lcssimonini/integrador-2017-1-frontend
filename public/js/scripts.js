const context = document.getElementById("canvas").getContext("2d")

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log('tarefa mudou de status');
}


function toogle_disabled( bool ) {
	var input = document.getElementsByTagName('input');
	var textarea = document.getElementsByTagName('textarea');
	for( var i=0; i<=(input.length-1); i++ )
	{
		if( input[i].type!='image' )
			input[i].disabled = bool;
	}
	for( var i=0; i<=(textarea.length-1); i++ )
	{
		textarea[i].disabled = bool;
	}
  console.log('salvando');
}

function novoCard(){
  var novocard = "<div draggable='true' ondragstart='drag(event)' id='drag1'><label for=''>Titulo</label><input type='image' src='img/pencil-edit-button.svg'  width='15px' height='15px' onclick='toogle_disabled( false )'><input type='image' src='img/save-file-option.svg'  width='15px' height='15px' onclick='toogle_disabled( true )'><input type='text' class='form-control' placeholder='Descreva o Titulo'><label for=''>Descrição</label><textarea type='text' class='form-control' rows='3' cols='30' id='plus' name='teste' placeholder='Descreva aqui a tarefa'></textarea></div>";
        document.getElementById("div1").innerHTML = novocard;
};

function close() {
    document.getElementById("closeranking").style.width = "0%";
}

var data = {
  fill: false,
  labels: ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5"],
  datasets: [{
  label: "Sprint",
  backgroundColor: '#F5E461',
  borderColor: '#F5E461',
  data: [
    1,
    2,
    3,
    5,
    4,
  ]
  }]
}

var options = {
   responsive: true
}

var myLineChart = new Chart(context, {
    type: 'line',
    data: data,
    options: options
});
