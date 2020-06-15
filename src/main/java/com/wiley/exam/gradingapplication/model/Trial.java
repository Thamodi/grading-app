package com.wiley.exam.gradingapplication.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Trial")
@EntityListeners(AuditingEntityListener.class)
public class Trial {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "value", nullable = false)
	private String value;
	
	@Column(name = "result", nullable = false)
	private String result;
	
	@Column(name = "attempted_date", nullable = false)
	private String attemptedDate;
	
	@JoinColumn(name = "assignment_id", referencedColumnName = "id")
	@ManyToOne(cascade = CascadeType.REMOVE)
	@JsonIgnore
	private Assignment assignment;
	
	@JoinColumn(name = "student_id", referencedColumnName = "id")
	@ManyToOne(cascade = CascadeType.REMOVE)
	@JsonIgnore
	private Student student;
	
	@OneToMany(cascade = CascadeType.REMOVE)
	@JsonIgnore
    private List<Answer> answers;
	
	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}
	
	public String getDate() {
		return attemptedDate;
	}

	public void setDate(String date) {
		this.attemptedDate = date;
	}

}
