package com.wiley.exam.gradingapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wiley.exam.gradingapplication.model.Teacher;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Integer>  {
	
	@Query(nativeQuery = true ,value ="SELECT * FROM Teacher WHERE Teacher.username = :username AND Teacher.password = :password")
	Teacher findTeacherByUsernamePassword(@Param("username")String username, @Param("password")String password);
	
	@Query(nativeQuery = true ,value ="SELECT Teacher.id FROM Teacher WHERE Teacher.username = :username")
	int findTeacherIdByUsername(@Param("username")String username);



}