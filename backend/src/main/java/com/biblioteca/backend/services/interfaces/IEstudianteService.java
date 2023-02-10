package com.biblioteca.backend.services.interfaces;

import java.util.List;
import com.biblioteca.backend.models.Estudiante;

public interface IEstudianteService {
    
    public Estudiante save(Estudiante estudiante);
    public void delete(Long id);
    public Estudiante findById(Long id);
    public List<Estudiante> findAll();
    public Estudiante update(Estudiante estudiante);

}
