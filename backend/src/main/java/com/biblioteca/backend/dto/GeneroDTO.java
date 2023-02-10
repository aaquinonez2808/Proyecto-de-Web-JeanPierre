package com.biblioteca.backend.dto;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import com.biblioteca.backend.models.Genero;

@Data @AllArgsConstructor @NoArgsConstructor
public class GeneroDTO {

    private Long id;
    private String nombre;
    private String descripcion;

    public GeneroDTO(Genero genero) {
        this.id = genero.getId();
        this.nombre = genero.getNombre();
        this.descripcion = genero.getDescripcion();
    }
    
}
