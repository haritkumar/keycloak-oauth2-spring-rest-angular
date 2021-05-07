package com.resource.server.controller;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin
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
    
    @GetMapping(value = "/admin/delete/{hexcode}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Color deleteColor(@PathVariable("hexcode") String hexcode) {
    	Optional<Color> matchingObject = Color.COLORS.stream().
    		    filter(color -> color.getHexcode().equals(hexcode)).findFirst();
    	//Remove
    	return matchingObject.get();
    }
    
    final String[] colorsArr = {"1f441e", "cee6b4", "9ecca4", "9b3675", "350b40", "ee99a0", "09015f", "f6c065"};
    
    @PostMapping(value = "/admin/add", produces = MediaType.APPLICATION_JSON_VALUE)
    public Color add(@RequestBody Color color) {
    	Random random = new Random();
    	int index = random.nextInt(colorsArr.length);
    	color.setHexcode(colorsArr[index]);
    	//add
        return color;
    }
}

