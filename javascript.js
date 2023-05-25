var regras = [
	"Os usuários e a equipe do Laboratório devem preservar o silêncio na sala para que esta se configure como um ambiente de estudo;",
	"É proibida a alteração de qualquer componente instalado nos equipamentos (hardware ou software);",
	"É proibido o consumo de alimentos e bebidas no laboratório;",
	"Ao término do uso do laboratório, certifique-se de desligar o PC com a respectiva tela, fechando todos os programas e finalizando o sistema operacional;",
];
var contador = 0;

function proximo(){
	var label = document.getElementById("labelregras");
    label.innerHTML = regras[contador]; 
	contador += 1;
	console.log(contador)
	if(contador>regras.length){
		label.innerHTML = "Fim!"; 
		contador -= 1;
		console.log(contador)
	}
}

function anterior(){
	var label = document.getElementById("labelregras");
	contador -= 2;
    label.innerHTML = regras[contador]; 
	
	console.log(contador)
	contador++
	if(contador<0){
		label.innerHTML = ""; 
		contador += 1;
		console.log(contador)
	}
}

var usoequip = [
	"Utilize os computadores apenas para atividades relacionadas aos cursos oferecidos;",	
	"Desligue corretamente os computadores ao finalizar o uso;",
	"Não instale ou remova programas sem autorização;",
	"Não altere as configurações dos computadores;",
	"Salve seus arquivos em dispositivos externos ou na nuvem;",
	"Não é permitido acessar sites ou conteúdos impróprios;",
	"Evite salvar informações pessoais nos computadores;",
	"Reporte qualquer problema técnico aos responsáveis.",
];
var contador = 0;

function proximouso(){
	var label = document.getElementById("labelregrasuso");
    label.innerHTML = usoequip[contador]; 
	contador += 1;
	console.log(contador)
	if(contador>regras.length){
		label.innerHTML = "Fim!"; 
		contador -= 1;
		console.log(contador)
	}
}

function anterioruso(){
	var label = document.getElementById("labelregrasuso");
	contador -= 2;
    label.innerHTML = usoequip[contador]; 
	
	console.log(contador)
	contador++
	if(contador<0){
		label.innerHTML = ""; 
		contador += 1;
		console.log(contador)
	}
}



