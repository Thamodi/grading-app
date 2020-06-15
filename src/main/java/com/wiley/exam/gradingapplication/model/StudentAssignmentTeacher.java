package com.wiley.exam.gradingapplication.model;

import javax.persistence.CascadeType;
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
@Table(name = "StudentAssignmentTeacher")
@EntityListeners(AuditingEntityListener.class)
public class StudentAssignmentTeacher {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@JoinColumn(name = "student_id", referencedColumnName = "id")
	@ManyToOne(cascade = CascadeType.REMOVE)
	@JsonIgnore
	private Student student;
	
	@JoinColumn(name = "teacher_id", referencedColumnName = "id")
	@ManyToOne(cascade = CascadeType.REMOVE)
	@JsonIgnore
	private Teacher teacher;
	
	@JoinColumn(name = "assignment_id", referencedColumnName = "id")
	@ManyToOne(cascade = CascadeType.REMOVE)
	@JsonIgnore
	private Assignment assignment;

}
