package com.wiley.exam.gradingapplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wiley.exam.gradingapplication.model.Assignment;
import com.wiley.exam.gradingapplication.model.Trial;

@Repository
public interface TrialRepository extends JpaRepository<Trial, Integer>  {
	
	@Query(nativeQuery = true ,value ="SELECT * FROM Trial WHERE Trial.assignment_id= :assignment_id AND Trial.student_id= :student_id")
	List<Trial> findAssignmentAttempts(@Param("assignment_id")int assignment_id,@Param("student_id")int student_id);
	
	@Query(nativeQuery = true ,value ="SELECT * FROM Trial WHERE Trial.assignment_id= :assignment_id AND Trial.student_id=:student_id AND Trial.id= (select MAX(Trial.id) FROM Trial WHERE Trial.assignment_id= :assignment_id AND Trial.student_id=:student_id) ")
	Trial findLatestAttempt(@Param("assignment_id")int assignment_id,@Param("student_id")int student_id);
	
	
}