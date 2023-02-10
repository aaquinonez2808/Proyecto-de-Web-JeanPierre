package com.biblioteca.backend.services.implement;

import com.biblioteca.backend.models.Estudiante;
import com.biblioteca.backend.repository.IEstudiante;
import com.biblioteca.backend.services.interfaces.IEstudianteService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import org.springframework.stereotype.Service;


@Service
public class EstudianteService  implements IEstudianteService{

    @Autowired
    private IEstudiante estudianteRepository;

    @Override
    public Estudiante save(Estudiante estudiante) {
        return estudianteRepository.save(estudiante);
    }

    @Override
    public void delete(Long id) {
        estudianteRepository.deleteById(id);
    }

    @Override
    public Estudiante findById(Long id) {
        return estudianteRepository.findById(id).orElse(null);
    }

    @Override
    public List<Estudiante> findAll() {
        return estudianteRepository.findAll();
    }

    @Override
    public Estudiante update(Estudiante estudiante) {
        return estudianteRepository.save(estudiante);
    }
    
}
