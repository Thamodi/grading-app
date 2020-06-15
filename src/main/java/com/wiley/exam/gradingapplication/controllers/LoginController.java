package com.wiley.exam.gradingapplication.controllers;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonObject;
import com.wiley.exam.gradingapplication.dto.LoginDTO;
import com.wiley.exam.gradingapplication.services.LoginServices;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/user")
public class LoginController {
	
	 private Logger logger = LoggerFactory.getLogger(LoginController.class);
	 
	 @Autowired
	 private LoginServices loginServices;
	 
	@PostMapping("/login")
	public String login(@Valid @RequestBody String data) {
		logger.info("Received Login Details");
		JsonObject response = new JsonObject();
		try {
			ObjectMapper mapper = new ObjectMapper();
			LoginDTO login = mapper.readValue(data, LoginDTO.class);
			response = loginServices.authenticateUser(login);
		} catch (Exception ex) {
			logger.error("An error occurred during login ", ex);
			response.addProperty("error", true);
			response.addProperty("errorMsg", ex.getMessage());
		}
		return response.toString();
	}
	
	

}
