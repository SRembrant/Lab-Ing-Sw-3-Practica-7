import { Component, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reg-pacientes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reg-pacientes.html',
  styleUrl: './reg-pacientes.css',
})
export class RegPacientes implements OnInit {

  formPaciente!: FormGroup;

  mensajeNotificacion = signal('');
  mostrarNotificacion = signal(false);

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formPaciente = this.fb.group({
      nombres: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(20)
        ]
      ],

      apellidos: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(20)
        ]
      ],

      tipoId: [
        '',
        [
          Validators.required
        ]
      ],

      correo: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/
          )
        ]
      ],

      genero: [
        '',
        [
          Validators.required
        ]
      ]
    });
  }

  // getters para acceder a los elementos html

  get nombres() {
    return this.formPaciente.get('nombres');
  }

  get apellidos() {
    return this.formPaciente.get('apellidos');
  }

  get tipoId() {
    return this.formPaciente.get('tipoId');
  }

  get correo() {
    return this.formPaciente.get('correo');
  }

  get genero() {
    return this.formPaciente.get('genero');
  }

  // Determina si se debe mostrar el mensaje de error de un campo.
   
  mostrarError(controlName: string): boolean {

    const control = this.formPaciente.get(controlName);

    return !!control &&
           control.invalid &&
           (control.touched || control.dirty);
  }

  //Método ejecutado cuando se envía el formulario.
  registrarPaciente(): void {

    //Si el formulario es invalido, no permitimos el registro.
    if (this.formPaciente.invalid) {

      // Marca todos los campos como tocados para mostrar sus errores.      
      this.formPaciente.markAllAsTouched();

      return;
    }

    // Obtenemos todos los valores del formulario.
    const {
      nombres,
      apellidos,
      genero,
      correo,
      tipoId
    } = this.formPaciente.getRawValue();


    // Mostrar notificación de éxito.
    this.mostrarNotificacionExito(
      `Paciente ${nombres} ${apellidos} registrado con éxito`
    );

    //Limpiar el formulario después del registro.
    this.formPaciente.reset({
      nombres: '',
      apellidos: '',
      tipoId: '',
      correo: '',
      genero: ''
    });
  }

  // Muestra la notificación durante 3 segundos.
  
  private mostrarNotificacionExito(mensaje: string): void {

    this.mensajeNotificacion.set(mensaje);
    this.mostrarNotificacion.set(true);

    window.setTimeout(() => {

      this.mostrarNotificacion.set(false);
      this.mensajeNotificacion.set('');

    }, 3000);
  }
}