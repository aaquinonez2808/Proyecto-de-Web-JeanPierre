package com.biblioteca.backend.dto;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import com.biblioteca.backend.models.Estudiante;

@Data @AllArgsConstructor @NoArgsConstructor
public class EstudianteDTO {
    
    private Long id;
    private String nombre;
    private String apellido;
    private String cedula;
    private String telefono;
    private String direccion;
    private String email;
    
    public EstudianteDTO(Estudiante estudiante) {
        this.id = estudiante.getId();
        this.nombre = estudiante.getNombre();
        this.apellido = estudiante.getApellido();
        this.cedula = estudiante.getCedula();
        this.telefono = estudiante.getTelefono();
        this.direccion = estudiante.getDireccion();
        this.email = estudiante.getEmail();
    }

}
