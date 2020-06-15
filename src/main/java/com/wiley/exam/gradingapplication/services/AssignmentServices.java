package com.wiley.exam.gradingapplication.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonParser;
import com.wiley.exam.gradingapplication.model.Trial;
import com.wiley.exam.gradingapplication.repository.StudentRepository;
import com.wiley.exam.gradingapplication.repository.TrialRepository;

@Component
public class AssignmentServices {
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private TrialRepository trialRepository;
	
	public JsonArray getAssignmentAttempts(String username,int assignment_id) {		
		int id = studentRepository.findStudentIdByUsername(username);
		List<Trial> assignments = trialRepository.findAssignmentAttempts(assignment_id,id);
		Gson gson = new Gson();
		String data = gson.toJson(assignments);
		JsonArray jsonArray = new JsonParser().parse(data).getAsJsonArray();
		return jsonArray;
	}

}
