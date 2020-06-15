package com.wiley.exam.gradingapplication.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.wiley.exam.gradingapplication.services.ResultServices;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/result")
public class ResultsController {
	
	private Logger logger = LoggerFactory.getLogger(ResultsController.class);
	
	@Autowired
	private ResultServices resultServices;
	
	@GetMapping("/getresults/{attempt_id}")
	public String getResults(@PathVariable(value = "attempt_id") String attempt_id) {
		logger.info("Received attempt id ");
		JsonObject response = new JsonObject();
		try {
			JsonArray jsonArray  = resultServices.getResults(attempt_id);
			response.addProperty("success", true);
			response.add("results", jsonArray);
		} catch (Exception ex) {
			logger.error("An error occurred while getting courses ", ex);
			response.addProperty("error", true);
			response.addProperty("errorMsg", ex.getMessage());
		}
		return response.toString();
	}
	
	

}
