package com.wiley.exam.gradingapplication.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonParser;
import com.wiley.exam.gradingapplication.model.Course;
import com.wiley.exam.gradingapplication.repository.CourseRepository;
import com.wiley.exam.gradingapplication.repository.StudentRepository;

@Component
public class StudentCourseServices {
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private CourseRepository courseRepository;
	
	public JsonArray getStudentCourses(String username) {		
	    int id = studentRepository.findStudentIdByUsername(username);
		List<Course> courses = courseRepository.getCoursesforstudent(id);
		Gson gson = new Gson();
		String data = gson.toJson(courses);
		JsonArray jsonArray = new JsonParser().parse(data).getAsJsonArray();
		return jsonArray;
	}
	
	

}
