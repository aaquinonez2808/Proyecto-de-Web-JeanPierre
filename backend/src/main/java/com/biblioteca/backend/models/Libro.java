package com.biblioteca.backend.models;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "libros")
@Data @AllArgsConstructor @NoArgsConstructor
public class Libro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String autor;
    private String editorial;
    private String descripcion;
    private boolean disponible;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "genero_id", referencedColumnName = "id")
    private Genero genero;

    @OneToMany(mappedBy = "libro", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Prestamo> prestamos;
}
