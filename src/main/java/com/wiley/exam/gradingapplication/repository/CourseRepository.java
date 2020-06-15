package com.wiley.exam.gradingapplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.wiley.exam.gradingapplication.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {

	@Query(nativeQuery = true, value = "SELECT c.* FROM gradingapp_db.course c inner join gradingapp_db.student_course sc ON c.id = sc.course_id WHERE sc.student_id = :student_id")
	List<Course> getCoursesforstudent(@Param("student_id") int student_id);

	@Query(nativeQuery = true, value = "SELECT DISTINCT c.* FROM gradingapp_db.course c inner join gradingapp_db.assignment a ON c.id = a.course_id WHERE a.id IN (SELECT sat.assignment_id  FROM gradingapp_db.student_assignment_teacher sat where sat.teacher_id = :teacher_id)") 
    List<Course> getCoursesforteacher(@Param("teacher_id") int teacher_id);

}
