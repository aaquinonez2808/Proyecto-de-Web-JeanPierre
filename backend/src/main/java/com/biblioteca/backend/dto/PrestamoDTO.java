package com.biblioteca.backend.dto;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import com.biblioteca.backend.models.Prestamo;
import com.biblioteca.backend.models.Estudiante;
import com.biblioteca.backend.models.Libro;

@Data
@AllArgsConstructor
@NoArgsConstructor
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
        return new Estudiante(this.estudiante.getId(), this.estudiante.getNombre(), this.estudiante.getApellido(),
                this.estudiante.getCedula(), this.estudiante.getTelefono(), this.estudiante.getEmail(),
                this.estudiante.getDireccion());

    }

    public Libro toLibro() {
        Libro libro = new Libro();
        libro.setId(this.libro.getId());
        libro.setTitulo(this.libro.getTitulo());
        libro.setAutor(this.libro.getAutor());
        libro.setEditorial(this.libro.getEditorial());
        libro.setDescripcion(this.libro.getDescripcion());
        libro.setDisponible(this.libro.isDisponible());
        libro.setGenero(this.libro.toGenero());
        return libro;
    }

}
