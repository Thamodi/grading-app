package com.wiley.exam.gradingapplication.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.gson.JsonObject;
import com.wiley.exam.gradingapplication.repository.AssignmentRepository;
import com.wiley.exam.gradingapplication.repository.StudentRepository;

@Component
public class StatisticServices {
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private AssignmentRepository assignmentRepository;
	
	public JsonObject getStatistics() {	
		JsonObject data = new JsonObject();
		int studentCount  = studentRepository.findStudentCount();
	    int assignmentCount = assignmentRepository.findAssignmentCount();
	    data.addProperty("studentCount", studentCount);
	    data.addProperty("assignmentCount", assignmentCount);
		return data;
	}

}
