package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Employee;
import com.example.repository.EmployeeRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor 
public class EmployeeService {
	
	@Autowired
	private  EmployeeRepository employeeRepository;
	/*
	//@Transactional (readOnly = true)
	public List<Employee> getAllEmployees() {
		
        return employeeRepository.findAll();
    }
	
	public Employee save(Employee employee) {
		return employeeRepository.saveAndFlush(employee);
	}
*/
	

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public Employee updateEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
}
}