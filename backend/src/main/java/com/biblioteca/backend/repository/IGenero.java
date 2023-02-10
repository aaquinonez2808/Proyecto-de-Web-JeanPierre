package com.biblioteca.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.biblioteca.backend.models.Genero;


public interface IGenero extends JpaRepository<Genero, Long>{
    
}
