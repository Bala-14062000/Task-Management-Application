package com.example.controller;

import java.util.List;

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

import com.example.entity.Employer;
import com.example.service.EmployerService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
@AllArgsConstructor
public class EmployerController {
	
	@Autowired
	private EmployerService employerService;
	/*
	@GetMapping("/employer")
	public List<Employer> getEmployer(){
		return employerService.getAllEmployers();
	}
	
	@PostMapping("/employer")
	public Employer addTask(@RequestBody Employer employer) {
		return employerService.save(employer);
	}
	
	*/
	
	
	@PostMapping("/employer")
	public Employer createEmployer(@RequestBody Employer employer) {
        return employerService.createEmployer(employer);
    }

    @GetMapping("/employer")
    public List<Employer> getAllEmployers() {
        return employerService.getAllEmployers();
    }

    @GetMapping("/employer/{id}")
    public Employer getEmployerById(@PathVariable("id") Long id) {
        return employerService.getEmployerById(id).orElse(null);
    }

    @PutMapping("/employer/{id}")
    public Employer updateEmployer(@PathVariable("id") Long id, @RequestBody Employer employer) {
        employer.setId(id);
        return employerService.updateEmployer(employer);
    }

    @DeleteMapping("/employer/{id}")
    public void deleteEmployer(@PathVariable("id") Long id) {
        employerService.deleteEmployer(id);
    }
}