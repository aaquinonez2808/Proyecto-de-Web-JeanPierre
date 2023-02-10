package com.biblioteca.backend.services.implement;

import com.biblioteca.backend.models.Genero;
import com.biblioteca.backend.dto.GeneroDTO;
import com.biblioteca.backend.repository.IGenero;
import com.biblioteca.backend.services.interfaces.IGeneroService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class GeneroService implements IGeneroService{
    
    @Autowired
    private IGenero generoRepository;

    @Override
    public Genero save(Genero genero) {
        return generoRepository.save(genero);
    }

    @Override
    public void delete(Long id) {
        generoRepository.deleteById(id);
    }

    @Override
    public Genero findById(Long id) {
        return generoRepository.findById(id).orElse(null);
    }

    @Override
    public GeneroDTO findByIdDTO(Long id) {
        Genero genero = generoRepository.findById(id).orElse(null);
        return genero == null ? null : new GeneroDTO(genero);
    }

    @Override
    public List<Genero> findAll() {
        return generoRepository.findAll();
    }
}
