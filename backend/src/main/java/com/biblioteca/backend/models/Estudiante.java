package com.biblioteca.backend.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.CascadeType;
import jakarta.persistence.FetchType;


@Entity
@Table(name = "estudiantes")
@Data @AllArgsConstructor @NoArgsConstructor
public class Estudiante {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String apellido;
    private String cedula;
    private String telefono;
    private String email;
    private String direccion;

    @OneToMany(mappedBy = "estudiante", orphanRemoval = true, cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
    private List<Prestamo> prestamos;

    public Estudiante(Long id, String nombre, String apellido, String cedula, String telefono, String email, String direccion) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.telefono = telefono;
        this.email = email;
        this.direccion = direccion;
    }
    
    
}
