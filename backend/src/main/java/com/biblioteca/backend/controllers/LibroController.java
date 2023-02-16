package com.biblioteca.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import com.biblioteca.backend.services.interfaces.ILibroService;
import com.biblioteca.backend.models.Libro;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;
import java.util.stream.Collectors;
import com.biblioteca.backend.dto.LibroDTO;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/libro")
public class LibroController {

    @Autowired(required = true)
    private ILibroService libroService;


    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Libro libro) {
        Libro libroGuardado = libroService.save(libro);
        return ResponseEntity.status(HttpStatus.CREATED).body(libroGuardado);
    }

    @GetMapping("/list")
    public ResponseEntity<?> list() {
        List<Libro> libros = libroService.findAll();
        if (libros.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(libros.stream().map(LibroDTO::new).collect(Collectors.toList()));
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        LibroDTO libro = libroService.findByIdDTO(id);
        if (libro == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(libro);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@RequestBody Libro libro, @PathVariable Long id) {
        Libro libroBuscado = libroService.findById(id).get();
        if (libroBuscado == null) {
            return ResponseEntity.notFound().build();
        }
        libro.setId(libroBuscado.getId());
        libroService.save(libro);
        return ResponseEntity.status(HttpStatus.OK).body(libro);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Libro libroBuscado = libroService.findById(id).get();
        if (libroBuscado == null) {
            return ResponseEntity.notFound().build();
        }
        libroService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(libroBuscado);
    }
    
}
