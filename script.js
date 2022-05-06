//USAREMOS ES5
//CREAMOS FUNCION CONSTRUCTORA DE CONSULTORIO
function Consultorio(nombre){
    this.nombre = nombre;
    this.pacientes = []
}

    //METODOS
    //METODO AÑADIR PACIENTES
    Consultorio.prototype.aniadir = function (paciente){
        this.pacientes.push(paciente);
    }
    //METODO IMPRIMIR DATOS DE PACIENTES
    Consultorio.prototype.imprimir = function (){
        this.pacientes.map(function (item) {
            console.log(`${item.nombre} - ${item.edad} años - ${item.rut} - ${item.diagnostico}`)         
            })
        }
    //METODO PARA BUSCAR
    Consultorio.prototype.buscar2 = function (nombre){
            console.log("Resultado de busqueda:")
            let pacientes2= this.pacientes.filter((item)=>{        
                return item.nombre.toLowerCase().includes(nombre.toLowerCase())
            })
            pacientes2.map(function (item){
                console.log(`${item.nombre} - ${item.edad} años - ${item.rut} - ${item.diagnostico}`)         
                })
            }   
        
//CREAMOS FUNCION CONSTRUCTORA DE PACIENTES
function Paciente(nombre, edad, rut){
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = null;
}

//GETTERS
Paciente.prototype.getNombre = function(){
    return this.nombre;
};
Paciente.prototype.getEdad = function(){
    return this.edad;
};
Paciente.prototype.getRut = function(){
    return this.rut;
};
Paciente.prototype.getDiagnostico = function(){
    return this.diagnostico;
};
//SETTERS
Paciente.prototype.setNombre = function(nombre){
    return this.nombre = nombre;
};
Paciente.prototype.setEdad = function(edad){
    return this.edad = edad;
};
Paciente.prototype.setRut = function(rut){
    return this.rut = rut;
};
Paciente.prototype.setDiagnostico = function(diagnostico){
    return this.diagnostico = diagnostico;
};

//INTANCIAMOS EL CONSULTORIO

const consultorio1 = new Consultorio("SAPU");

//INTANCIAMOS LOS PACIENTES
const paciente1 = new Paciente("Walter White", 50, 20000-0)
const paciente2 = new Paciente("Jesse Pinkman", 25, 21000-0)

// //Implementar métodos getters y setters para poder acceder y modificar datos de los pacientes

paciente1.setDiagnostico("Cáncer");
paciente2.setDiagnostico("Abstinencia");

//AÑADIMOS LOS PACIENTES AL ARRAY PACIENTES
consultorio1.aniadir(paciente1)
consultorio1.aniadir(paciente2)
//IMPRIMIMOS TODOS LOS PACIENTES
consultorio1.imprimir()


// //ES6
// //CREAMOS UNA CLASE PARA LOS CONSULTORIOS
// class Consultorio{
//     constructor(nombre){
//         this.nombre = nombre;
//         this.pacientes = []
//     }
//     //METODOS
//     //METODO AÑADIR PACIENTES
//     aniadir(paciente){
//         this.pacientes.push(paciente);
//     }
//     //METODO IMPRIMIR DATOS DE PACIENTES
//     imprimir(){
//         this.pacientes.map(item => {
//             console.log(`${item.nombre} - ${item.edad} años - ${item.rut} - ${item.diagnostico}`)         
//             })
//         }
//     buscar2(nombre){
//             console.log("Resultado:")
//             let pacientes2= this.pacientes.filter((item)=>{        
//                 return item.nombre.toLowerCase().includes(nombre.toLowerCase())
//             })
//             pacientes2.map(item => {
//                 console.log(`${item.nombre} - ${item.edad} años - ${item.rut} - ${item.diagnostico}`)         
//                 })
//             }   
        
        
// }

// //CREAMOS LA CLASE PARA LOS PACIENTES DE LOS CONSULTORIOS
// class Paciente{
//     constructor(nombre, edad, rut){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.rut = rut;
//         this.diagnostico = null;
//     }
// //GETTERS

//     get getNombre(){
//         return this.nombre;    
//     }
//     get getEdad(){
//         return this.edad;    
//     }
//     get getRut(){
//         return this.rut;    
//     }
//     get getDiagnostico(){
//         return this.diagnostico;    
//     }
// //SETTERS
//     set setNombre(nombre){
//         this.nombre = nombre;
//     }
//     set setEdad(edad){
//         this.edad = edad;
//     }
//     set setRut(rut){
//         this.rut = rut;
//     }
//     set setDiagnostico(diagnostico){
//         this.diagnostico = diagnostico;
//     }
// }

// //INSTANCIAR CONSULTORIO
// const consultorio1 = new Consultorio("SAPU");

// //INSTANCIAR PACIENTES
// const paciente1 = new Paciente("Walter White", 50, 20000-0);
// const paciente2 = new Paciente("Jesse Pinkman", 25, 21000-0);

// //Implementar métodos getters y setters para poder acceder y modificar datos de los pacientes

// paciente1.setDiagnostico = "Cáncer";
// paciente2.setDiagnostico = "Abstinencia";

// //AÑADIMOS LOS PACIENTES AL ARRAY PACIENTES
// consultorio1.aniadir(paciente1)
// consultorio1.aniadir(paciente2)
// //IMPRIMIMOS TODOS LOS PACIENTES
// consultorio1.imprimir()

