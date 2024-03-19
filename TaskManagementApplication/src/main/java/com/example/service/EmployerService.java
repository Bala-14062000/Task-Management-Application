package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Employer;
import com.example.repository.EmployerRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployerService {
		
	@Autowired
	private  EmployerRepository employerRepository;
/*	
	@Transactional //(readOnly = true)
	public List<Employer> getAllEmployers() {
        return employerRepository.findAll();
    }
	public Employer save(Employer employer) {
		return employerRepository.saveAndFlush(employer);
	}
	
	*/
	
	
	public Employer createEmployer(Employer employer) {
        return employerRepository.save(employer);
    }

    public List<Employer> getAllEmployers() {
        return employerRepository.findAll();
    }

    public Optional<Employer> getEmployerById(Long id) {
        return employerRepository.findById(id);
    }

    public Employer updateEmployer(Employer employer) {
        return employerRepository.save(employer);
    }

    public void deleteEmployer(Long id) {
        employerRepository.deleteById(id);
    }
}
