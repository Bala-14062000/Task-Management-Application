package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Task;
import com.example.service.TaskService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
@AllArgsConstructor
public class TaskController {
	
	@Autowired
	private TaskService taskService;
	/*
	@GetMapping("/task")
	public List<Task> getTask(){
		return taskService.getAllTasks();
	}
	
	@PostMapping("/task")
	public Task addTask(@RequestBody Task task) {
		return taskService.save(task);
	}
	*/
	
	
	@PostMapping("/task")
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @GetMapping("/task")
    public Task getTaskById(@PathVariable("id") Long id) {
        return taskService.getTaskById(id).orElse(null);
    }

    @PutMapping("/task/{id}")
    public Task updateTask(@PathVariable("id") Long id, @RequestBody Task task) {
        task.setId(id);
        return taskService.updateTask(task);
    }

    @DeleteMapping("/task/{id}")
    public void deleteTask(@PathVariable("id") Long id) {
        taskService.deleteTask(id);
    }
}
