package com.biblioteca.backend.dto;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import com.biblioteca.backend.models.Prestamo;
import com.biblioteca.backend.models.Estudiante;
import com.biblioteca.backend.models.Libro;

@Data @AllArgsConstructor @NoArgsConstructor
public class PrestamoDTO {
    
    private Long id;
    private String fechaPrestamo;
    private String fechaDevolucion;
    private EstudianteDTO estudiante;
    private LibroDTO libro;

    public PrestamoDTO(Prestamo prestamo) {
        this.id = prestamo.getId();
        this.fechaPrestamo = prestamo.getFechaPrestamo();
        this.fechaDevolucion = prestamo.getFechaDevolucion();
        this.estudiante = new EstudianteDTO(prestamo.getEstudiante());
        this.libro = new LibroDTO(prestamo.getLibro());
    }

    public Estudiante toEstudiante() {
        return new Estudiante(this.estudiante.getId(), this.estudiante.getNombre(), this.estudiante.getApellido(), this.estudiante.getCedula(), this.estudiante.getTelefono(), this.estudiante.getEmail(),this.estudiante.getDireccion());

    }

    public Libro toLibro() {
        return new Libro(this.libro.getId(), this.libro.getTitulo(), this.libro.getAutor(), this.libro.getEditorial(),this.libro.getDescripcion(), this.libro.isDisponible(), this.libro.toGenero());
    }

}
