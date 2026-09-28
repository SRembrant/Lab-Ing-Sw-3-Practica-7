import { Component, signal } from '@angular/core';


interface Especialidad {
  id: string;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-sec-medicos',
  imports: [],
  templateUrl: './sec-medicos.html',
  styleUrl: './sec-medicos.css',
})
export class SecMedicos {
  // Estado para la descripción actual
  descripcionActual = signal<string>('Selecciona una especialidad para ver su detalle.');

  // Listado estructurado de especialidades
  listaEspecialidades: Especialidad[] = [
    {
      id: 'catFisioterapia',
      nombre: 'Fisioterapia',
      descripcion: 'Es la especialista en ayudarte a moverte sin dolor. Usa masajes, estiramientos y ejercicios guiados para que tu cuerpo se recupere de una lesión o un golpe.'
    },
    {
      id: 'catQuiropraxia',
      nombre: 'Quiropraxia',
      descripcion: 'Se concentra en acomodar tu columna vertebral. El especialista usa sus manos para hacer masajes y movimientos firmes en tu espalda.'
    },
    {
      id: 'catTerapiaNeural',
      nombre: 'Terapia Neural',
      descripcion: 'Consiste en aplicar pequeñas inyecciones para calmar el dolor. Se pone un líquido analgésico muy suave en puntos clave del cuerpo para que los nervios que están irritados dejen de doler.'
    },
    {
      id: 'catNutricion',
      nombre: 'Nutrición y Dieta',
      descripcion: 'Te enseñan qué alimentos le hacen bien a tu cuerpo para tener más energía, cuidar tu peso o ayudarte a sanar desde adentro.'
    },
    {
      id: 'catPediatria',
      nombre: 'Pediatría',
      descripcion: 'Acompaña y cuida la salud de tus hijos desde que nacen hasta que se hacen grandes.'
    }
  ];

  // Método para actualizar la señal
  mostrarDescripcion(mensaje: string): void {
    this.descripcionActual.set(mensaje);
  }
}
