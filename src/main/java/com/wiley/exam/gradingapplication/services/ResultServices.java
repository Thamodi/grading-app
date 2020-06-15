package com.wiley.exam.gradingapplication.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonParser;
import com.wiley.exam.gradingapplication.dto.ResultDTO;
import com.wiley.exam.gradingapplication.model.Answer;
import com.wiley.exam.gradingapplication.repository.AnswerRepository;
import com.wiley.exam.gradingapplication.repository.QuestionRepository;

@Component
public class ResultServices {
	
	@Autowired
	private AnswerRepository answerRepository;
	
	@Autowired
	private QuestionRepository questionRepository;
	
	public JsonArray getResults(String attempt_id) {		
		List<Answer> answers= answerRepository.findAnswersByTrialId(attempt_id);
		List<ResultDTO> results = new ArrayList<ResultDTO>();
		for(Answer a:answers) {
			ResultDTO result = new ResultDTO();
			result.setAnswer(a.getValue());
			result.setResult(a.getResult());			
			String question = questionRepository.findQuestionById(a.getQuestion().getId());
			result.setQuestion(question);
			results.add(result);
		}
		Gson gson = new Gson();
		String data = gson.toJson(results);
		JsonArray jsonArray = new JsonParser().parse(data).getAsJsonArray();
		return jsonArray;
	}

}

