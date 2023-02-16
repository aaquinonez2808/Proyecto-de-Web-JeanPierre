package com.biblioteca.backend.services.interfaces;

import java.util.List;
import java.util.Optional;

import com.biblioteca.backend.models.Libro;
import com.biblioteca.backend.dto.LibroDTO;

public interface ILibroService {
    
    public Libro save(Libro libro);
    public void delete(Long id);
    public Optional<Libro> findById(Long id);
    public LibroDTO findByIdDTO(Long id);
    public List<Libro> findAll();
}
