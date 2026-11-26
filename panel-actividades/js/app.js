// La lista de tareas: un arreglo de objetos.
const tareas = [
  { titulo: "Comprar café", prioridad: "alta", estado: "pendiente" },
  { titulo: "Leer", prioridad: "baja", estado: "completada" },
];

// ¿Es válido el título? (entre 3 y 80 caracteres)
function esTituloValido(titulo) {
  return titulo.length >= 3 && titulo.length <= 80;
}

// Crear una tarea solo si el título es válido. Devuelve true o false.
function crearTarea(titulo, prioridad) {
  if (!esTituloValido(titulo)) {
    console.log("Título no válido");
    return false;
  }
  tareas.push({ titulo: titulo, prioridad: prioridad, estado: "pendiente" });
  return true;
}

// Contar las pendientes.
function contarPendientes() {
  return tareas.filter(t => t.estado === "pendiente").length;
}

// Listar todas en la consola.
function listar() {
  for (const t of tareas) {
    console.log(`${t.titulo} (${t.prioridad}) - ${t.estado}`);
  }
}