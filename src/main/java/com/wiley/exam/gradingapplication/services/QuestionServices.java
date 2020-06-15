package com.wiley.exam.gradingapplication.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonParser;
import com.wiley.exam.gradingapplication.dto.QuestionDetailsDTO;
import com.wiley.exam.gradingapplication.model.Question;
import com.wiley.exam.gradingapplication.repository.AnswerRepository;
import com.wiley.exam.gradingapplication.repository.QuestionRepository;

@Component
public class QuestionServices {
	
	@Autowired
	private QuestionRepository questionRepository;
	
	@Autowired
	private AnswerRepository answerRepository;
	
	public JsonArray getQuestionAnswerResults(int assignment_id) {		
	    List<Question> questions= questionRepository.findQuestionByAssignmentId(assignment_id);
	    List<QuestionDetailsDTO> questionDetails = new ArrayList<QuestionDetailsDTO>();
	    for(Question q:questions) {
	    	QuestionDetailsDTO question = new QuestionDetailsDTO();
	    	question.setQuestion(q.getValue());
	    	int total = answerRepository.findTotalTimeSpentForAnswer(q.getId());
	    	int count = answerRepository.findAnswersCountByQuestion(q.getId());
	    	int correct = answerRepository.findCorrectAnswerCount(q.getId());
	    	int incorrect = answerRepository.findInCorrectAnswerCount(q.getId());
	    	question.setCorrectAnsers(correct);
	    	question.setIncorrectAnswers(incorrect);
	    	question.setAverageTime(total/count);
	    	questionDetails.add(question);
	    }
        Gson gson = new Gson();
		String data = gson.toJson(questionDetails);
		JsonArray jsonArray = new JsonParser().parse(data).getAsJsonArray();
		return jsonArray;
	}


}
