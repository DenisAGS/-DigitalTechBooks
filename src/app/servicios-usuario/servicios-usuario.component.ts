import { Component } from '@angular/core';

interface PreguntaFrecuente {
  pregunta: string;
  respuesta: string;
}

@Component({
  selector: 'app-servicios-usuario',
  templateUrl: './servicios-usuario.component.html',
  styleUrls: ['./servicios-usuario.component.css']
})
export class ServiciosUsuarioComponent {
  preguntas  = [
    { pregunta: '¿Cómo puedo acceder a la biblioteca virtual?', respuesta: 'Puedes acceder a nuestra biblioteca virtual desde cualquier dispositivo con conexión a internet.' },
    { pregunta: '¿Qué recursos puedo encontrar en la biblioteca virtual?', respuesta: ' Explora nuestras categorías para encontrar material relevante para tus necesidades.' }
  ];

  estadoExpandido: boolean[] = [];

  toggleRespuesta(index: number) {
    this.estadoExpandido[index] = !this.estadoExpandido[index];
  }

  isExpandida(index: number): boolean {
    return this.estadoExpandido[index];
  }
}
