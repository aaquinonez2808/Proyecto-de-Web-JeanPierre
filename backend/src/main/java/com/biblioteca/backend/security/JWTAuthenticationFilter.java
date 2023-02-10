package com.biblioteca.backend.security;

import java.io.IOException;
import java.util.Collections;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter{
    
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        
        AuthCredentials authCredentials = new AuthCredentials();
        try {
            authCredentials = new ObjectMapper().readValue(request.getReader(), AuthCredentials.class);
        } catch (IOException e) {
            
        }
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(authCredentials.getEmail(), authCredentials.getPassword(), Collections.emptyList());
        return getAuthenticationManager().authenticate(authToken);	
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
            Authentication authResult) throws IOException,ServletException {
             UserDetailsImp userDetailsImp =   (UserDetailsImp) authResult.getPrincipal();
            String token = TokenUtils.generateAccessToken(userDetailsImp.getNombre(), userDetailsImp.getUsername());
            response.addHeader("Authorization", "Bearer " + token);
            response.getWriter().write(token);
            response.getWriter().flush();

            super.successfulAuthentication(request, response, chain, authResult);




    }
}
