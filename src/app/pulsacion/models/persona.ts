export class Persona {
    identificacion: string;
    nombre: string;
    sexo: string;
    edad: number;
    pulsacion: number;

    calcularPulsacion(){
        if(this.sexo=="Femenino"){
            this.pulsacion=(220-this.edad)/10;
        }else{
            if(this.sexo=="Masculino"){
                this.pulsacion=(210-this.edad)/10;
            }
        }
    }

}
