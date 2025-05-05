// En el código siguiente en robot hay un método getter, numOfSensors,
// pero no un método setter.
// ¿Qué pasa si necesitamos agregar o eliminar sensores?
// Solucionemos ese problema.

// const robot = {
//   _model: "1E78V2",
//   _energyLevel: 100,
//   _numOfSensors: 15,
//   get numOfSensors() {
//     if (typeof this._numOfSensors === "number") {
//       return this._numOfSensors;
//     } else {
//       return "Sensors are currently down.";
//     }
//   },
// };

// Paso 1:
// Agregue un método setter llamado numOfSensors con la palabra
// clave set. Proporcione un parámetro de num.
// Deje el cuerpo de la función vacío por ahora.

// Paso 2
// Hay un par de cosas que debemos hacer en el método setter:
// Agregue una verificación para ver si num es un número
// usando el operador typeof.
// num también debe ser mayor o igual a 0.
// Si se cumplen ambas condiciones, reasignar
// this._numOfSensors a num.

// Paso 3:
// Ahora agregue un registro else que registre
// 'Pass in a number that is greater than or equal to 0'
// en la consola.

// Paso 4:
// Utilice el método setter numOfSensors para asignar
// robot._numOfSensors a 100.

// Paso 5:
// Para comprobar que el método setter funcionó,
// registre en console.log() robot.numOfSensors.

const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,

  // Paso 1: Agregamos el getter numOfSensors
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },

  // Paso 1: Agregamos el setter numOfSensors con parámetro num
  set numOfSensors(num) {
    // Paso 2: Agregamos las verificaciones
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      // Paso 3: Agregamos el mensaje de error
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

// Paso 4: Utilizamos el setter para asignar el valor 100
robot.numOfSensors = 100;

// Paso 5: Comprobamos que el setter funcionó
console.log(robot.numOfSensors);
