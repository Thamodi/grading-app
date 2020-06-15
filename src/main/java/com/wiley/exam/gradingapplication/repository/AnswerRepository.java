package com.wiley.exam.gradingapplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wiley.exam.gradingapplication.model.Answer;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Integer>  {
	
	@Query(nativeQuery = true ,value ="SELECT * FROM Answer WHERE Answer.trial_id = :trial_id")
	List<Answer> findAnswersByTrialId(@Param("trial_id")String trial_id);
	
	@Query(nativeQuery = true ,value ="SELECT COUNT(Answer.id) FROM Answer WHERE Answer.question_id = :question_id")
	int findAnswersCountByQuestion(@Param("question_id")int question_id);
	
	@Query(nativeQuery = true ,value ="SELECT SUM(Answer.timespent) FROM Answer WHERE Answer.question_id = :question_id")
	int findTotalTimeSpentForAnswer(@Param("question_id")int question_id);
	
	@Query(nativeQuery = true ,value ="SELECT COUNT(Answer.id) FROM Answer WHERE Answer.question_id = :question_id AND Answer.result ='Correct'")
	int findCorrectAnswerCount(@Param("question_id")int question_id);
	
	@Query(nativeQuery = true ,value ="SELECT COUNT(Answer.id) FROM Answer WHERE Answer.question_id = :question_id AND Answer.result ='Incorrect'")
	int findInCorrectAnswerCount(@Param("question_id")int question_id);

}
