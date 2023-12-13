/*Ejercicio 1
esta función acepta como primer parámetro un objeto, y cómo segundo un string que puede ser keys o values, donde el primero retorna el nombre de las propiedades y el segundo sus valores
*/
const list = (object, item)=>{
  return item==="keys"?
      Object.keys(object) :
      Object.keys(object).map(key => object[key])
}

/*Ejercicio2*/
//This puede ser:
//1. Fuera de una función hace referencia al ambito global, por ejemplo en un navegador:
  this.log(this === window)
//2. En una función regular, si se llama desde un objeto hace referencia al objeto:
  const Objeto = {
      name:"daniel",
      metodo: function(){
          return this.name //this === Objeto
      }
  }
//3. En una función fuera de un objeto hace referencia al contexto de la función
  function funcion() {
      console.log(this); //this === undef
  }
//4. en una arrow dunction hace referencia al contexto donde fue definida la arrow
  let objeto = {
      metodo: function() {
      return () => {
          console.log(this); // this===objeto
      };
      }
  };

//las diferencias en arrow functions son:
  /*This: las Arrow Functions heredan el this del contexto léxico en el que fueron definidas, mientras las function expressions tienen su propio this, que depende de cómo se invoca la función.

  Sintaxis: La sintaxis es mas corta en las arrow, pero más flexible en las expressions (funciones creadoras)

  Arguments:
      Las arrow no tienen su propio objeto arguments mientras que las expression tienen su propio objeto arguments que contiene todos los argumentos pasados a la función.

  Uso como constructores:
      las arrow no tienen prototype y pueden ser usadas como constructoras, a diferencia de las expression.
      */

/*Ejercicio3*/
class InvertirCadea{
  constructor(){
      this.cadenaInvertir='';
  }

  invertir() {
      if (this.cadenaInvertir === '') {
        throw new Error('La cadena está vacía. No se puede invertir.');
      }
  
      const invertida = this.cadenaInvertir.split('').reverse().join('');
      console.log(`Cadena invertida: ${invertida}`);
    }
}

const invertirCadena = new InvertirCadena();

//para manejar el error y que no rompa:
try {
  invertirCadena.invertir(); // si invertir cadena tiene un valor string válido, lo descompone en un array hace reverse y lo vuelve a unir
  invertirCadena.nuevoMetodo();
} catch (error) {
  console.error(error.message);
}

/*Ejercicio4*/
class Login{
  constructor(username,password){
      this.username=username;
      this.password=password;
  }

  login(){
      (this.username==='admin'&&this.password==='passwd')?
      alert("User logged in") :
      alert("User or password incorrect");
  }
}


// Ejercicio 5
const btnLoginSuccess = document.getElementById('loginSuccess');
const btnLoginFailure = document.getElementById('loginFailure');


btnLoginSuccess.addEventListener('click', function() {
  const succes = new Login('admin', 'passwd');
  succes.login
});

btnLoginFailure.addEventListener('click', function() {
  const failure = new Login('pepe', 'bad');
  failure.login;
});

// Ejercicio 6
const btnAsyncLoginSuccess = document.getElementById('loginSuccessAsync');
const btnAsyncLoginFailure = document.getElementById('loginFailureAsync');

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};

btnAsyncLoginSuccess.addEventListener('click', async ()=>{
  try {
    const result = await loginWitUsername('admin', 'passwd');
    alert(result);
  } catch (error) {
    alert(error);
  }
})
btnAsyncLoginFailure.addEventListener('click',async ()=>{
  try {
    const result = await loginWitUsername('admi', 'passw');
    alert(result);
  } catch (error) {
    alert(error);
  }
})
