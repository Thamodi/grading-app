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
@Table(name = "Question")
@EntityListeners(AuditingEntityListener.class)
public class Question {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "value", nullable = false)
	private String value;
	
	@JoinColumn(name = "assignment_id", referencedColumnName = "id")
	@ManyToOne(cascade = CascadeType.REMOVE)
	@JsonIgnore
	private Assignment assignment;
	
	@OneToMany(cascade = CascadeType.REMOVE)
	@JsonIgnore
    private List<Answer> answers;
	
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

}
