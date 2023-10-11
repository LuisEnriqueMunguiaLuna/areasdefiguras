function obtenerArea() {
  let figura = (document.getElementById("figura").value);
  let Resultado = document.getElementById("Resultado");
  let base = parseFloat(document.getElementById("base").value);
  let altura = parseFloat(document.getElementById("altura").value);

  let area;


  if (figura == "Cuadrado") {
    area = base * altura;
  } else if (figura == "Triangulo") {
    area = (base * altura) / 2;
  } else if (figura == "Rectangulo") {
    area = base * altura;

  }

  Resultado.textContent = `El area es:` + area;

}

function limpiar() {
  const Resultado = document.getElementById("Resultado");
  Resultado.textContent = "";

  // Limpiar el texto de los campos de entrada
  document.getElementById("base").value = "";
  document.getElementById("altura").value = ""
}


