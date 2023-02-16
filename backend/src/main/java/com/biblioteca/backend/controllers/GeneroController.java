package com.biblioteca.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.biblioteca.backend.services.interfaces.IGeneroService;
import com.biblioteca.backend.models.Genero;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;
import java.util.stream.Collectors;
import com.biblioteca.backend.dto.GeneroDTO;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/api/genero")
public class GeneroController {


    @Autowired(required = true)
    private IGeneroService generoService;


    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Genero genero) {
        Genero generoGuardado = generoService.save(genero);
        return ResponseEntity.status(HttpStatus.CREATED).body(generoGuardado);
    }

    @GetMapping("/list")
    public ResponseEntity<?> list() {
        List<Genero> generos = generoService.findAll();
        if (generos.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(generos.stream().map(GeneroDTO::new).collect(Collectors.toList()));
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        GeneroDTO genero = generoService.findByIdDTO(id);
        if (genero == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(genero);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@RequestBody Genero genero, @PathVariable Long id) {
        Genero generoBuscado = generoService.findById(id);
        System.out.println(generoBuscado.getNombre());
        if (generoBuscado == null) {
            return ResponseEntity.notFound().build();
        }
        genero.setId(generoBuscado.getId());
        generoService.save(genero);
        return ResponseEntity.status(HttpStatus.OK).body(genero);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Genero generoBuscado = generoService.findById(id);
        if (generoBuscado == null) {
            return ResponseEntity.notFound().build();
        }
        generoService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(generoBuscado);
    }
}
