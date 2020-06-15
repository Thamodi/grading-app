package com.wiley.exam.gradingapplication.dto;

public class GradeResultsDTO {
	
	private int studentName;
	private String assignmentName;
	private String lastAttemptedDate;
	private String lastAttemptedResult;
	public int getStudentName() {
		return studentName;
	}
	public void setStudentName(int studentName) {
		this.studentName = studentName;
	}
	public String getAssignmentName() {
		return assignmentName;
	}
	public void setAssignmentName(String assignmentName) {
		this.assignmentName = assignmentName;
	}
	public String getLastAttemptedDate() {
		return lastAttemptedDate;
	}
	public void setLastAttemptedDate(String lastAttemptedDate) {
		this.lastAttemptedDate = lastAttemptedDate;
	}
	public String getLastAttemptedResult() {
		return lastAttemptedResult;
	}
	public void setLastAttemptedResult(String lastAttemptedResult) {
		this.lastAttemptedResult = lastAttemptedResult;
	}
	

}
