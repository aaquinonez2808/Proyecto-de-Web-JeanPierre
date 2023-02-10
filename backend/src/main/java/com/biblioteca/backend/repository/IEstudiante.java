package com.biblioteca.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.biblioteca.backend.models.Estudiante;

public interface IEstudiante  extends JpaRepository<Estudiante, Long>{
    
}
