package com.wiley.exam.gradingapplication.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonObject;
import com.wiley.exam.gradingapplication.services.StatisticServices;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/statistics")
public class StatisticsController {
	
	@Autowired
	private StatisticServices statisticsServices;
	
	@GetMapping("/getstatistics")
	public String getStatistics() {		
		JsonObject response = new JsonObject();
		try {
			JsonObject data = statisticsServices.getStatistics();
			response.addProperty("success", true);
			response.add("data", data);
		} catch (Exception ex) {			
			response.addProperty("error", true);
			response.addProperty("errorMsg", ex.getMessage());
		}
		return response.toString();
	}

}
