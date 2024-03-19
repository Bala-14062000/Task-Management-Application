package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Employer;

@Repository
public interface EmployerRepository extends JpaRepository<Employer, Long> {

}
