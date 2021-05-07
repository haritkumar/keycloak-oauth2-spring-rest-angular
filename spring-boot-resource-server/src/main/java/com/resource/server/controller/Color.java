package com.resource.server.controller;

import static java.util.Arrays.asList;

import java.util.List;

public class Color {

    private String hexcode;
    private String name;
    Color(){}
    Color(String hexcode, String name) {
        this.hexcode = hexcode;
        this.name = name;
    }


    public void setName(String name) {
		this.name = name;
	}


	public String getHexcode() {
		return hexcode;
	}

	public void setHexcode(String hexcode) {
		this.hexcode = hexcode;
	}


	public String getName() {
        return name;
    }
    
    public static List<Color> COLORS = asList(
            new Color("ffc996", "Color A"),
            new Color("ff8474", "Color B"),
            new Color("9f5f80", "Color C"),
            new Color("583d72", "Color D"),
            new Color("04009a", "Color E"),
            new Color("77acf1", "Color F"),
            new Color("542e71", "Color G"),
            new Color("fb3640", "Color H"),
            new Color("fdca40", "Color I"),
            new Color("a799b7", "Color J"),
            new Color("194350", "Color K"),
            new Color("7b113a", "Color L")    
    );
}
