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
import com.wiley.exam.gradingapplication.services.TeacherServices;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/teacher")
public class TeacherController {
	
	private Logger logger = LoggerFactory.getLogger(TeacherController.class);
	
	@Autowired
	private TeacherServices teacherServices;
	
	@GetMapping("/getcourses/{username}")
	public String getTeacherCourses(@PathVariable(value = "username") String username) {
		logger.info("Received username of student");
		JsonObject response = new JsonObject();
		try {
			JsonArray courses = teacherServices.getTeacherCourses(username);
			response.addProperty("success", true);
			response.add("courses", courses);
		} catch (Exception ex) {
			logger.error("An error occurred while getting courses ", ex);
			response.addProperty("error", true);
			response.addProperty("errorMsg", ex.getMessage());
		}
		return response.toString();
	}
	
	@GetMapping("/getgrades/{course_id}")
	public String getGrades(@PathVariable(value = "course_id") String course_id) {
		logger.info("Received username of student");
		JsonObject response = new JsonObject();
		try {
			JsonArray grades = teacherServices.getGrades(course_id);
			response.addProperty("success", true);
			response.add("grades", grades);
		} catch (Exception ex) {
			logger.error("An error occurred while getting courses ", ex);
			response.addProperty("error", true);
			response.addProperty("errorMsg", ex.getMessage());
		}
		return response.toString();
	}
	
	

}
