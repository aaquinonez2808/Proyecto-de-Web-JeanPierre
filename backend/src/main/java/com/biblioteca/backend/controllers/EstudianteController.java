package com.biblioteca.backend.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import com.biblioteca.backend.services.interfaces.IEstudianteService;
import com.biblioteca.backend.models.Estudiante;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import java.util.List;



@RestController
@RequestMapping("/api/estudiante")
public class EstudianteController {

    @Autowired(required = true)
    private IEstudianteService estudianteService;


    @PostMapping("/save")
    private ResponseEntity<?> save(@RequestBody Estudiante estudiante) {
        Estudiante estudianteGuardado = estudianteService.save(estudiante);
        //Crear un objeto para retornar el estado, el mensaje y el objeto guardado
        return ResponseEntity.status(201).body(estudianteGuardado);
    }

    @PutMapping("/update/{id}")
    private ResponseEntity<?> update(@RequestBody Estudiante estudiante, @PathVariable Long id) {
        Estudiante estudianteBuscado = estudianteService.findById(id);
        if (estudianteBuscado == null) {
            return ResponseEntity.notFound().build();
        }
        estudiante.setId(estudianteBuscado.getId());
        estudianteService.save(estudiante);
        return ResponseEntity.ok(estudiante);
    }

    @GetMapping("/list")
    private ResponseEntity<?> list() {
        List<Estudiante> estudiantes = estudianteService.findAll();
        if (estudiantes.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(estudiantes);
    }

    @GetMapping("/find/{id}")
    private ResponseEntity<?> findById(@PathVariable Long id) {
        Estudiante estudiante = estudianteService.findById(id);
        if (estudiante == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(estudiante);
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id) {
        Estudiante estudiante = estudianteService.findById(id);
        System.out.println(estudiante.getNombre());
        if (estudiante == null) {
            return ResponseEntity.notFound().build();
        }
        estudianteService.delete(id);
        return ResponseEntity.ok(estudiante);
    }
    
}
