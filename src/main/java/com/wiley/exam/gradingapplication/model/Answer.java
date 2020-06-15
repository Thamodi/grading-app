package com.wiley.exam.gradingapplication.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Answer")
@EntityListeners(AuditingEntityListener.class)
public class Answer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "value", nullable = false)
	private String value;
	
	@Column(name = "result", nullable = false)
	private String result;
	
	@Column(name = "timespent", nullable = false)
	private long timespent;
	
	@JoinColumn(name = "question_id", referencedColumnName = "id")
	@ManyToOne(cascade = CascadeType.REMOVE)
	@JsonIgnore
	private Question question;
	
	@JoinColumn(name = "trial_id", referencedColumnName = "id")
	@ManyToOne(cascade = CascadeType.REMOVE)
	@JsonIgnore
	private Trial trial;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}
	
	public Question getQuestion() {
		return question;
	}

	public void setQuestionId(Question question) {
		this.question = question;
	}
	
	
	
	

}
