package com.biblioteca.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.biblioteca.backend.models.Libro;

public interface ILibro extends JpaRepository<Libro, Long>{
    
}
