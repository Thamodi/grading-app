package com.wiley.exam.gradingapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wiley.exam.gradingapplication.model.StudentAssignmentTeacher;

@Repository
public interface StudentAssignmentTeacherRepository extends JpaRepository<StudentAssignmentTeacher, Integer>  {
	
	@Query(nativeQuery = true ,value ="SELECT sat.student_id FROM gradingapp_db.student_assignment_teacher sat WHERE sat.assignment_id= :assignment_id")
	int findStudentId(@Param("assignment_id")int assignment_id);

}
