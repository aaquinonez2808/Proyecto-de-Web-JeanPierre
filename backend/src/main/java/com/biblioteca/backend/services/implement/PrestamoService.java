package com.biblioteca.backend.services.implement;

import com.biblioteca.backend.dto.PrestamoDTO;
import com.biblioteca.backend.models.Prestamo;
import com.biblioteca.backend.repository.IPrestamo;
import com.biblioteca.backend.services.interfaces.IPrestamoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrestamoService implements IPrestamoService{
    
    @Autowired
    private IPrestamo prestamoRepository;
    

    @Override
    public Prestamo save(Prestamo prestamo) {
        return prestamoRepository.save(prestamo);
    }

    @Override
    public void delete(Long id) {
        prestamoRepository.deleteById(id);
    }

    @Override
    public Prestamo findById(Long id) {
        return prestamoRepository.findById(id).orElse(null);
    }

    @Override
    public PrestamoDTO findByIdDTO(Long id) {
        Prestamo prestamo = prestamoRepository.findById(id).orElse(null);
        return prestamo == null ? null : new PrestamoDTO(prestamo);
    }

    @Override
    public List<Prestamo> findAll() {
        return prestamoRepository.findAll();
    }

}
