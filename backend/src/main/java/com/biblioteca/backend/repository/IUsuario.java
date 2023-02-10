package com.biblioteca.backend.repository;

import com.biblioteca.backend.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


public interface IUsuario  extends JpaRepository<Usuario, Long>{
    public Optional<Usuario> findOneByEmail(String username);
}
