package com.biblioteca.backend.dto;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import com.biblioteca.backend.models.Libro;
import com.biblioteca.backend.models.Genero;

@Data @AllArgsConstructor @NoArgsConstructor
public class LibroDTO {

    private Long id;
    private String titulo;
    private String autor;
    private String editorial;
    private String descripcion;
    private boolean disponible;
    private GeneroDTO genero;

    public LibroDTO(Libro libro) {
        this.id = libro.getId();
        this.titulo = libro.getTitulo();
        this.autor = libro.getAutor();
        this.editorial = libro.getEditorial();
        this.descripcion = libro.getDescripcion();
        this.disponible = libro.isDisponible();
        this.genero = new GeneroDTO(libro.getGenero());
    }

    public Genero toGenero() {
        Genero genero = new Genero();
        genero.setId(this.genero.getId());
        genero.setNombre(this.genero.getNombre());
        genero.setDescripcion(this.genero.getDescripcion());
        return genero;

    }
    
}
