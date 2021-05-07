package com.resource.server.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ApiRestController {

  

    @GetMapping(value = "/user/colors", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Color> getColors(final @AuthenticationPrincipal Jwt jwt) {
    	//Jwt principal = (Jwt) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    	System.out.println("headers:\n" + jwt.getHeaders());
		System.out.println("\nclaims:\n" + jwt.getClaims());
        return Color.COLORS;
    }

    @GetMapping(value = "/user/color/{hexcode}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Color getColor(@PathVariable("hexcode") String hexcode) {
    	Optional<Color> matchingObject = Color.COLORS.stream().
    		    filter(color -> color.getHexcode().equals(hexcode)).findFirst();
        return matchingObject.get();
    }
    
   
}

