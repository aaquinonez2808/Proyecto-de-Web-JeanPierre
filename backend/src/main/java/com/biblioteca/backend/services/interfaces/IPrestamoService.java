package com.biblioteca.backend.services.interfaces;

import java.util.List;
import com.biblioteca.backend.models.Prestamo;
import com.biblioteca.backend.dto.PrestamoDTO;

public interface IPrestamoService {
    

    public Prestamo save(Prestamo prestamo);
    public void delete(Long id);
    public Prestamo findById(Long id);
    public PrestamoDTO findByIdDTO(Long id);
    public List<Prestamo> findAll();

}
