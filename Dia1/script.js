// Mostramos un mensaje inicial con alert
alert("Bienvenido a la web de Campuslands");

// Mostramos el panel de inicio con prompt para que el usuario elija un rol
const opcion = prompt(
  "¿Como quieres iniciar sesion?\n\n" +
  "1. Camper\n" +
  "2. Trainer\n" +
  "3. Coordinador\n" +
  "4. Salir\n\n" +
  "Escribe el número de tu opción:"
);

// Usamos switch para manejar la respuesta del usuario
switch(opcion) {
  case "1":
    // Si elige Camper
    alert("Has iniciado sesión como Camper");
    // Aquí podrías agregar más opciones específicas para camper
    break;

  case "2":
    // Si elige Trainer
    alert("Has iniciado sesión como Trainer");
    // Aquí también puedes seguir con un menú para trainers
    break;

  case "3":
    // Si elige Coordinador
    alert("Has iniciado sesión como Coordinador");
    // Igual aquí podrías mostrar funciones administrativas
    break;

  case "4":
    // Si elige salir
    alert("Gracias por visitar el sistema. ¡Hasta luego!");
    break;

  default:
    // Si escribe cualquier otra cosa
    alert("Opción no válida. Recarga la página e intenta de nuevo.");
    break;
}
