package com.wiley.exam.gradingapplication.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.gson.JsonObject;
import com.wiley.exam.gradingapplication.dto.LoginDTO;
import com.wiley.exam.gradingapplication.model.Student;
import com.wiley.exam.gradingapplication.model.Teacher;
import com.wiley.exam.gradingapplication.repository.StudentRepository;
import com.wiley.exam.gradingapplication.repository.TeacherRepository;

@Component
public class LoginServices {
	
	 @Autowired
	 private StudentRepository studentRepository;
	 
	 @Autowired
	 private TeacherRepository teacherRepository;
	 
	 public JsonObject authenticateUser(LoginDTO login) {
		JsonObject response = new JsonObject();
		if (login.getType().equalsIgnoreCase("Student")) {
			Student student = studentRepository.findStudentByUsernamePassword(login.getUsername(), login.getPassword());
			if (student != null) {
				response.addProperty("valid", true);
				response.addProperty("name", student.getName());
			} else {
				response.addProperty("valid", false);
			}

		} else if (login.getType().equalsIgnoreCase("Teacher")) {
			Teacher teacher = teacherRepository.findTeacherByUsernamePassword(login.getUsername(), login.getPassword());
			if (teacher != null) {
				response.addProperty("valid", true);
				response.addProperty("name", teacher.getName());
			} else {
				response.addProperty("valid", false);
			}
		}
		return response;
	}

}
