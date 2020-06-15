package com.wiley.exam.gradingapplication.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.wiley.exam.gradingapplication.services.QuestionServices;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/question")
public class QuestionController {
	
	@Autowired
	private QuestionServices questionServices;
	
	@GetMapping("/getQuestionAnswerResults/{assignment_id}")
	public String getQuestionAnswerResults(@PathVariable(value = "assignment_id") int assignment_id) {		
		JsonObject response = new JsonObject();
		try {			
			JsonArray jsonArray = questionServices.getQuestionAnswerResults(assignment_id);
			response.addProperty("success", true);
			response.add("results", jsonArray);
		} catch (Exception ex) {			
			response.addProperty("error", true);
			response.addProperty("errorMsg", ex.getMessage());
		}
		return response.toString();
	}

}
