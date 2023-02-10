package com.biblioteca.backend.services.interfaces;

import java.util.List;
import com.biblioteca.backend.models.Genero;
import com.biblioteca.backend.dto.GeneroDTO;

public interface IGeneroService {
    
    public Genero save(Genero genero);
    public void delete(Long id);
    public Genero findById(Long id);
    public GeneroDTO findByIdDTO(Long id);
    public List<Genero> findAll();
}
