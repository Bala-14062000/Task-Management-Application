package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {

//	@Query(value="Select * from task order by due_date desc",nativeQuery = true)
//	public List<Task> getAllTaskDueDateDesc();
//	
//	
//	@Query(value="Select new com.sam.dto.CountType(COUNT(*)/(Select COUNT(*) from Task) *100,type) from Task GROUP BY type")
//	public List<CountType> getPercentageGroupByType();

}
