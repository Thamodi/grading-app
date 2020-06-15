package com.wiley.exam.gradingapplication.dto;

public class QuestionDetailsDTO {
	
	private String question;
	private long averageTime;
	private int correctAnwsers;
	private int incorrectAnswers;
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public long getAverageTime() {
		return averageTime;
	}
	public void setAverageTime(long averageTime) {
		this.averageTime = averageTime;
	}
	public int getCorrectAnsers() {
		return correctAnwsers;
	}
	public void setCorrectAnsers(int correctAnsers) {
		this.correctAnwsers = correctAnsers;
	}
	public int getIncorrectAnswers() {
		return incorrectAnswers;
	}
	public void setIncorrectAnswers(int incorrectAnswers) {
		this.incorrectAnswers = incorrectAnswers;
	}
	
	

}
