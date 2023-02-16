package com.biblioteca.backend.services.implement;

import com.biblioteca.backend.models.Libro;
import com.biblioteca.backend.repository.ILibro;
import com.biblioteca.backend.services.interfaces.ILibroService;
import java.util.List;
import java.util.Optional;

import com.biblioteca.backend.dto.LibroDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LibroService implements ILibroService{
    
    @Autowired
    private ILibro libroRepository;

    @Override
    public Libro save(Libro libro) {
        return libroRepository.save(libro);
    }

    @Override
    public void delete(Long id) {
        libroRepository.deleteById(id);
    }

    @Override
    public LibroDTO findByIdDTO(Long id) {
        Libro libro = libroRepository.findById(id).orElse(null);
        return libro == null ? null : new LibroDTO(libro);
    }

    @Override
    public Optional<Libro> findById(Long id) {
        return libroRepository.findById(id);
    }

    @Override
    public List<Libro> findAll() {
        return libroRepository.findAll();
    }

}
