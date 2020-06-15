package com.wiley.exam.gradingapplication.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.wiley.exam.gradingapplication.model.Assignment;
import com.wiley.exam.gradingapplication.repository.AssignmentRepository;
import com.wiley.exam.gradingapplication.services.AssignmentServices;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/assignment")
public class AssignmentController {
	
private Logger logger = LoggerFactory.getLogger(AssignmentController.class);
	
	@Autowired
	private AssignmentRepository assignmentRepository;
	
	@Autowired
	private AssignmentServices assignmentServices;
	
	@GetMapping("/getassignments")
	public String getAssignments() {
		logger.info("Received course id");
		JsonObject response = new JsonObject();
		try {
			List<Assignment> assignments = assignmentRepository.findAll();
			Gson gson = new Gson();  
			String data = gson.toJson(assignments); 
			JsonArray jsonArray = new JsonParser().parse(data).getAsJsonArray();
			response.addProperty("success", true);
			response.add("assignments", jsonArray);
		} catch (Exception ex) {
			logger.error("An error occurred while getting courses ", ex);
			response.addProperty("error", true);
			response.addProperty("errorMsg", ex.getMessage());
		}
		return response.toString();
	}
	
	@GetMapping("/getassignments/{course_id}")
	public String getAssignments(@PathVariable(value = "course_id") String course_id) {
		logger.info("Received course id");
		JsonObject response = new JsonObject();
		try {
			List<Assignment> assignments = assignmentRepository.findAssignmentsByCourseId(course_id);
			Gson gson = new Gson();  
			String data = gson.toJson(assignments); 
			JsonArray jsonArray = new JsonParser().parse(data).getAsJsonArray();
			response.addProperty("success", true);
			response.add("assignments", jsonArray);
		} catch (Exception ex) {
			logger.error("An error occurred while getting courses ", ex);
			response.addProperty("error", true);
			response.addProperty("errorMsg", ex.getMessage());
		}
		return response.toString();
	}
	
	@GetMapping("/getAssignmentAttempts/{student_username}/{assignment_id}")
	public String getAssignmentAttempts(@PathVariable(value = "student_username") String student_username,@PathVariable(value = "assignment_id") int assignment_id) {		
		JsonObject response = new JsonObject();
		try {			
			JsonArray jsonArray = assignmentServices.getAssignmentAttempts(student_username,assignment_id);
			response.addProperty("success", true);
			response.add("attemptdetails", jsonArray);
		} catch (Exception ex) {
			logger.error("An error occurred while getting courses ", ex);
			response.addProperty("error", true);
			response.addProperty("errorMsg", ex.getMessage());
		}
		return response.toString();
	}
	
	

}
