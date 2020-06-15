package com.wiley.exam.gradingapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.wiley.exam.gradingapplication.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>  {
	
	@Query(nativeQuery = true ,value ="SELECT * FROM Student WHERE Student.username = :username AND Student.password = :password")
	Student findStudentByUsernamePassword(@Param("username")String username, @Param("password")String password);
	
	@Query(nativeQuery = true ,value ="SELECT Student.id FROM Student WHERE Student.username = :username")
	int findStudentIdByUsername(@Param("username")String username);
	
	@Query(nativeQuery = true ,value ="SELECT COUNT(Student.id) FROM Student")
	int findStudentCount();


}
