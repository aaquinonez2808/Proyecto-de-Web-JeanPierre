package com.biblioteca.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "prestamo")
@Data @AllArgsConstructor @NoArgsConstructor
public class Prestamo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fechaPrestamo;
    private String fechaDevolucion;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "estudiante_id", nullable = false)
    private Estudiante estudiante;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "libro_id", nullable = false)
    private Libro libro;
    
}
