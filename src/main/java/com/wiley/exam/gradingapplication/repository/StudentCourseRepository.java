package com.wiley.exam.gradingapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wiley.exam.gradingapplication.model.StudentCourse;

@Repository
public interface StudentCourseRepository extends JpaRepository<StudentCourse, Integer>  {
	
	
}
