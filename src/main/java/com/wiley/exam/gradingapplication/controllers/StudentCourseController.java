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
import com.wiley.exam.gradingapplication.services.StudentCourseServices;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/studentcourse")
public class StudentCourseController {
	
	private Logger logger = LoggerFactory.getLogger(StudentCourseController.class);
	
	@Autowired
	private StudentCourseServices studentCourseServices;
	
	@GetMapping("/getcourses/{username}")
	public String getCourses(@PathVariable(value = "username") String username) {
		logger.info("Received username of student");
		JsonObject response = new JsonObject();
		try {
			JsonArray courses = studentCourseServices.getStudentCourses(username);
			response.addProperty("success", true);
			response.add("courses", courses);
		} catch (Exception ex) {
			logger.error("An error occurred while getting courses ", ex);
			response.addProperty("error", true);
			response.addProperty("errorMsg", ex.getMessage());
		}
		return response.toString();
	}
}
