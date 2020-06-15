package com.wiley.exam.gradingapplication.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonParser;
import com.wiley.exam.gradingapplication.dto.GradeResultsDTO;
import com.wiley.exam.gradingapplication.model.Assignment;
import com.wiley.exam.gradingapplication.model.Course;
import com.wiley.exam.gradingapplication.model.Trial;
import com.wiley.exam.gradingapplication.repository.AssignmentRepository;
import com.wiley.exam.gradingapplication.repository.CourseRepository;
import com.wiley.exam.gradingapplication.repository.StudentAssignmentTeacherRepository;
import com.wiley.exam.gradingapplication.repository.TeacherRepository;
import com.wiley.exam.gradingapplication.repository.TrialRepository;

@Component
public class TeacherServices {
	
	@Autowired
	private TeacherRepository teacherRepository;
	
	@Autowired
	private AssignmentRepository  assignmentRepository;
	
	@Autowired
	private CourseRepository  courseRepository;	
	
	@Autowired
	private TrialRepository  trialRepository;
	
	@Autowired
	private StudentAssignmentTeacherRepository  studentAssignmentTeacherRepository;
	
	public JsonArray getTeacherCourses(String username) {		
	    int id = teacherRepository.findTeacherIdByUsername(username);
		List<Course> courses = courseRepository.getCoursesforteacher(id);	
		Gson gson = new Gson();
		String data = gson.toJson(courses);
		JsonArray jsonArray = new JsonParser().parse(data).getAsJsonArray();
		return jsonArray;
	}
	
	public JsonArray getGrades(String course_id) {		
	    List<Assignment> assignments= assignmentRepository.findAssignmentsByCourseId(course_id);
	    List<GradeResultsDTO> gradeResults = new ArrayList<GradeResultsDTO>();
	    for(Assignment a:assignments) {
	    	GradeResultsDTO gradeResult = new GradeResultsDTO();
	    	int id = studentAssignmentTeacherRepository.findStudentId(a.getId());
	    	Trial trial = trialRepository.findLatestAttempt(a.getId(), id);
	    	gradeResult.setAssignmentName(a.getName());
	    	gradeResult.setStudentName(id);
	    	gradeResult.setLastAttemptedDate(trial.getDate());
	    	gradeResult.setLastAttemptedResult(trial.getResult());
	    	gradeResults.add(gradeResult);
	    }
        Gson gson = new Gson();
		String data = gson.toJson(gradeResults);
		JsonArray jsonArray = new JsonParser().parse(data).getAsJsonArray();
		return jsonArray;
	}

}
