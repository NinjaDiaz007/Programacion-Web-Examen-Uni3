var venta = document.getElementById('venta'),
    compra = document.getElementById('compra');

//funcion para dar valor
function tipodecampio() {
    var tventa = "19.95",
        tcompra = "20.00";

    venta.textContent = tventa;
    compra.innerHTML = tcompra;
}

setInterval(() => {
    tipodecampio();
});
//==================================================//


//==================================================//
//=====================Registro=====================//
//==================================================//
var spanDolar = document.getElementById('span_dolar'),
    spanPeso = document.getElementById('span_peso'),
    Tpesos = 2000,
    Tdolar = 100;


if(Tpesos == 2000){
    var Tpes = Tpesos;
    spanPeso.innerHTML = Tpes;
}
else{
    function restaPesos() {
        Tpesos = Tpesos - pes;
        spanPeso.textContent = Tpesos;
    }
}

if(Tdolar == 100){
    var Tdol = Tdolar;
    spanDolar.innerHTML = Tdol;
}
else{
    function restaDolar() {
        Tdolar = Tdolar - totD;
        spanDolar.textContent = Tdolar;
    }
}

setInterval(() => {
    restaDolar();
    restaPesos();
}, 1000);
//==================================================//

//==================================================//
//=====================Calculadora==================//
//==================================================//
let screen = document.querySelector('#screen-result');

function getData(ref){
    let value = ref.value;
    screen.value += value;
}

function clean(){
    screen.value = '';
}

function calculate(){
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
        setTimeout(() => {
            clean();
        }, 500);
    }
}
//==================================================//

//==================================================//
//==========Convertido de pesos y dolares===========//
//==================================================//
function Convertir() {
    var valor = parseFloat(document.getElementById("Cantidad").value);

    var de = document.getElementById("de").value;
    var dlr = 19.95;
    var resultado = 0;

    if(valor == 0 || valor == null){
        alert("El campo esta vacio Intente de nuevo");
    }
    else{
        //peso a dolar
        if(de == 1){
            resultado = valor / dlr;
        }
        //dolar a peso
        else if(de == 2){
            resultado = valor * dlr;
        }
        //peso a peso   dolar a dolar   euro a euro
        else{
            resultado = valor;
        }
    }

    document.getElementById("resultado").innerHTML = "$"+resultado.toFixed(2);
}
//==================================================//

//==================================================//
//=====Exportar o guardar los datos en la tabla=====//
//==================================================//
const $btnExportar = document.querySelector("#btnExportar"),
        $tabla = document.querySelector("#tabla");

    $btnExportar.addEventListener("click", function() {
        let tableExport = new TableExport($tabla, {
            exportButtons: false, // No queremos botones
            filename: "Reporte de prueba", //Nombre del archivo de Excel
            sheetname: "Reporte de prueba", //Título de la hoja
        });
        let datos = tableExport.getExportData();
        let preferenciasDocumento = datos.tabla.xlsx;
        tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
    });
//==================================================//
//==================================================//
//==================================================//
//==================================================//
//==================================================//
//==================================================//
//==================================================//
//==================================================//