package com.biblioteca.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import com.biblioteca.backend.services.interfaces.IPrestamoService;
import com.biblioteca.backend.models.Prestamo;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;
import java.util.stream.Collectors;
import com.biblioteca.backend.dto.PrestamoDTO;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;





@RestController
@RequestMapping("/api/prestamo")
public class PrestamoController {

    @Autowired(required = true)
    private IPrestamoService prestamoService;


    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Prestamo prestamo) {
        Prestamo prestamoGuardado = prestamoService.save(prestamo);
        return ResponseEntity.status(HttpStatus.CREATED).body(prestamoGuardado);
    }

    @GetMapping("/list")
    public ResponseEntity<?> list() {
        List<Prestamo> prestamos = prestamoService.findAll();
        if (prestamos.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(prestamos.stream().map(PrestamoDTO::new).collect(Collectors.toList()));
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        PrestamoDTO prestamo = prestamoService.findByIdDTO(id);
        if (prestamo == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(prestamo);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@RequestBody Prestamo prestamo, @PathVariable Long id) {
        Prestamo libroBuscado = prestamoService.findById(id);
        if (libroBuscado == null) {
            return ResponseEntity.notFound().build();
        }
        prestamo.setId(libroBuscado.getId());
        prestamoService.save(prestamo);
        return ResponseEntity.status(HttpStatus.OK).body(prestamo);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Prestamo prestamoBuscado = prestamoService.findById(id);
        if (prestamoBuscado == null) {
            return ResponseEntity.notFound().build();
        }
        prestamoService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(prestamoBuscado);
    }
    
}
