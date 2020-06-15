package com.wiley.exam.gradingapplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wiley.exam.gradingapplication.model.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer>  {
	
	@Query(nativeQuery = true ,value ="SELECT Question.value FROM Question WHERE Question.id = :id")
	String findQuestionById(@Param("id")int id);
	
	@Query(nativeQuery = true ,value ="SELECT * FROM Question WHERE Question.assignment_id = :assignment_id")
	List<Question> findQuestionByAssignmentId(@Param("assignment_id")int assignment_id);

}
