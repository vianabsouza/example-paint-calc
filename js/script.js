larguraJanela = 2;
alturaJanela = 1.2;

alturaPorta = 1.9;
larguraPorta = 0.8;

areaJanela = larguraJanela * alturaJanela;
areaPorta = larguraPorta * alturaPorta;

function calcular(){
    // Parede Um
    larguraParedeUm = document.getElementById('larguraParedeUm').value = "" ? 0 : document.getElementById('larguraParedeUm').value;
    alturaParedeUm = document.getElementById('alturaParedeUm').value = "" ? 0 : document.getElementById('alturaParedeUm').value;
    janelasParedeUm = document.getElementById('janelasParedeUm').value = "" ? 0 : document.getElementById('janelasParedeUm').value;
    portasParedeUm = document.getElementById('portasParedeUm').value = "" ? 0 : document.getElementById('portasParedeUm').value;

    // Parede Dois
    larguraParedeDois = document.getElementById('larguraParedeDois').value = "" ? 0 : document.getElementById('larguraParedeDois').value;
    alturaParedeDois = document.getElementById('alturaParedeDois').value = "" ? 0 : document.getElementById('alturaParedeDois').value;
    janelasParedeDois = document.getElementById('janelasParedeDois').value = "" ? 0 : document.getElementById('janelasParedeDois').value;
    portasParedeDois = document.getElementById('portasParedeDois').value = "" ? 0 : document.getElementById('portasParedeDois').value;

    // Parede Três
    larguraParedeTres = document.getElementById('larguraParedeTres').value = "" ? 0 : document.getElementById('larguraParedeTres').value;
    alturaParedeTres = document.getElementById('alturaParedeTres').value = "" ? 0 : document.getElementById('alturaParedeTres').value;
    janelasParedeTres = document.getElementById('janelasParedeTres').value = "" ? 0 : document.getElementById('janelasParedeTres').value;
    portasParedeTres = document.getElementById('portasParedeTres').value = "" ? 0 : document.getElementById('portasParedeTres').value;

    // Parede Quatro
    larguraParedeQuatro = document.getElementById('larguraParedeQuatro').value = "" ? 0 : document.getElementById('larguraParedeQuatro').value;
    alturaParedeQuatro = document.getElementById('alturaParedeQuatro').value = "" ? 0 : document.getElementById('alturaParedeQuatro').value;
    janelasParedeQuatro = document.getElementById('janelasParedeQuatro').value = "" ? 0 : document.getElementById('janelasParedeQuatro').value;
    portasParedeQuatro = document.getElementById('portasParedeQuatro').value = "" ? 0 : document.getElementById('portasParedeTres').value;

    areaParedeUm = larguraParedeUm * alturaParedeUm;
    areaParedeDois = larguraParedeDois * alturaParedeDois;
    areaParedeTres = larguraParedeTres * alturaParedeTres;
    areaParedeQuatro = larguraParedeQuatro * alturaParedeQuatro;
    areaPinturaParedeUm = 0;
    areaPinturaParedeDois = 0;
    areaPinturaParedeTres = 0;
    areaPinturaParedeQuatro = 0;

    // Parede Um
    if (areaParedeUm >= 1 && areaParedeUm <= 15){
        areaJanelasParedeUm = (areaJanela * janelasParedeUm);
        areaPortasParedeUm = (areaPorta * portasParedeUm);
        if(areaParedeUm / (areaJanelasParedeUm + areaPortasParedeUm) >= 2){
            if(portasParedeUm >= 1){
                if((alturaParedeUm - alturaPorta) >= 0.30){
                    areaPinturaParedeUm = areaParedeUm - (areaJanelasParedeUm + areaPortasParedeUm);
                }
                else{
                    alert("Altura da parede um deve ser 30 centimetros maior do que altura da porta (1,90)");
                }
            }
            else{
                areaPinturaParedeUm = areaParedeUm - (areaJanelasParedeUm + areaPortasParedeUm);
            }
        }
        else{
            alert("Portas e Janelas da parede um excedem o tamanho maximo");
        }
    }
    else{
        alert("Parede um fora do tamanho necessário");
    }
    //Parede Dois
    if (areaParedeDois >= 1 && areaParedeDois <= 15) {
        areaJanelasParedeDois = (areaJanela * janelasParedeDois);
        areaPortasParedeDois = (areaPorta * portasParedeDois);
        if (areaParedeDois / (areaJanelasParedeDois + areaPortasParedeDois) >= 2) {
            if (portasParedeDois >= 1) {
                if ((alturaParedeDois - alturaPorta) >= 0.30) {
                    areaPinturaParedeDois = areaParedeDois - (areaJanelasParedeDois + areaPortasParedeDois);
                }
                else {
                    alert("Altura da parede dois deve ser 30 centimetros maior do que altura da porta (1,90)");
                }
            }
            else {
                areaPinturaParedeDois = areaParedeDois - (areaJanelasParedeDois + areaPortasParedeDois);
            }
        }
        else {
            alert("Portas e Janelas da parede dois excedem o tamanho maximo");
        }
    }
    else {
        alert("Parede dois fora do tamanho necessário");
    }

    //Parede Três
    if (areaParedeTres >= 1 && areaParedeTres <= 15) {
        areaJanelasParedeTres = (areaJanela * janelasParedeTres);
        areaPortasParedeTres = (areaPorta * portasParedeTres);
        if (areaParedeTres / (areaJanelasParedeTres + areaPortasParedeTres) >= 2) {
            if (portasParedeTres >= 1) {
                if ((alturaParedeTres - alturaPorta) >= 0.30) {
                    areaPinturaParedeTres = areaParedeTres - (areaJanelasParedeTres + areaPortasParedeTres);
                }
                else {
                    alert("Altura da parede três deve ser 30 centimetros maior do que altura da porta (1,90)");
                }
            }
            else {
                areaPinturaParedeTres = areaParedeTres - (areaJanelasParedeTres + areaPortasParedeTres);
            }
        }
        else {
           alert("Portas e Janelas da parede três excedem o tamanho maximo");
        }
    }
    else {
        alert("Parede três fora do tamanho necessário");
    }
    //Parede Quatro
    if (areaParedeQuatro >= 1 && areaParedeQuatro <= 15) {
        areaJanelasParedeQuatro = (areaJanela * janelasParedeQuatro);
        areaPortasParedeQuatro = (areaPorta * portasParedeQuatro);
        if (areaParedeQuatro / (areaJanelasParedeQuatro + areaPortasParedeQuatro) >= 2) {
            if (portasParedeQuatro >= 1) {
                if ((alturaParedeQuatro - alturaPorta) >= 0.30) {
                    areaPinturaParedeQuatro = areaParedeQuatro - (areaJanelasParedeQuatro + areaPortasParedeQuatro);
                }
                else {
                    alert("Altura da parede quatro deve ser 30 centimetros maior do que altura da porta (1,90)");
                }
            }
            else {
                areaPinturaParedeQuatro = areaParedeQuatro - (areaJanelasParedeQuatro + areaPortasParedeQuatro);
            }
        }
        else {
            alert("Portas e Janelas da parede quatro excedem o tamanho maximo");
        }
    }
    else {
        alert("Parede quatro fora do tamanho necessário");
    }
    litrosParedeUm = areaPinturaParedeUm / 5;
    litrosParedeDois = areaPinturaParedeDois / 5;
    litrosParedeTres = areaPinturaParedeTres / 5;
    litrosParedeQuatro = areaPinturaParedeQuatro / 5;
    
    litrosTinta = (litrosParedeUm + litrosParedeDois + litrosParedeTres + litrosParedeQuatro);
    latasMeioLitro = litrosTinta / 0.5;
    latasDoiseMeio = litrosTinta / 2.5;
    latasTreseSeis = litrosTinta / 3.6;
    latasDezoito = litrosTinta / 18;

    document.getElementById('resultAreaParedeUm').value = areaPinturaParedeUm;
    document.getElementById('resultAreaParedeDois').value = areaPinturaParedeDois;
    document.getElementById('resultAreaParedeTres').value = areaPinturaParedeTres;
    document.getElementById('resultAreaParedeQuatro').value = areaPinturaParedeQuatro;

    document.getElementById('resultLitrosParedeUm').value = litrosParedeUm;
    document.getElementById('resultLitrosParedeDois').value = litrosParedeDois;
    document.getElementById('resultLitrosParedeTres').value = litrosParedeTres;
    document.getElementById('resultLitrosParedeQuatro').value = litrosParedeQuatro;

    document.getElementById('resultArea').value = (areaPinturaParedeUm + areaPinturaParedeDois + areaPinturaParedeTres + areaPinturaParedeQuatro);
    document.getElementById('resultTinta').value = litrosTinta;
    document.getElementById('resultJanelas').value = (parseInt(janelasParedeUm) + parseInt(janelasParedeDois) + parseInt(janelasParedeTres) + parseInt(janelasParedeQuatro));
    document.getElementById('resultPortas').value = (parseInt(portasParedeUm) + parseInt(portasParedeDois) + parseInt(portasParedeTres) + parseInt(portasParedeQuatro));

    document.getElementById('resultMeioLitro').value = latasMeioLitro.toFixed(3);
    document.getElementById('resultoDoiseMeio').value = latasDoiseMeio.toFixed(3);
    document.getElementById('resultTreseSeis').value = latasTreseSeis.toFixed(3);
    document.getElementById('resultDezoito').value = latasDezoito.toFixed(3);
    document.getElementById('resultados').style.visibility = 'visible';
}