package com.wiley.exam.gradingapplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wiley.exam.gradingapplication.model.Assignment;
import com.wiley.exam.gradingapplication.model.Course;

@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Integer>  {
	
	@Query(nativeQuery = true ,value ="SELECT * FROM Assignment WHERE Assignment.course_id= :course_id")
	List<Assignment> findAssignmentsByCourseId(@Param("course_id")String course_id);
	
	@Query(nativeQuery = true, value = "SELECT a.* FROM gradingapp_db.assignment a inner join gradingapp_db.student_assignment_teacher sat ON a.id = sat.assignment_id WHERE sat.teacher_id = :teacher_id")
    List<Assignment> getAssignmentforTeacher(@Param("teacher_id") int teacher_id);
	
	@Query(nativeQuery = true ,value ="SELECT COUNT(Assignment.id) FROM Assignment")
	int findAssignmentCount();
	
}