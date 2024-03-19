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

import com.example.entity.User;
import com.example.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
@AllArgsConstructor
public class UserController {
	 		@Autowired
	    private UserService userService;

	    @GetMapping("/user")
	    public List<User> getAllUsers() {
	        return userService.getAllUsers();
	    }

	    @PostMapping("/user")
	    public User createUser(@RequestBody User user) {
	        return userService.createUser(user);
	    }

	    @PutMapping("/user/{id}")
	    public User updateUser(@PathVariable Long id, @RequestBody User user) {
	        user.setId(id);
	        return userService.updateUser(user);
	    }

	    @DeleteMapping("/user/{id}")
	    public void deleteUser(@PathVariable Long id) {
	        userService.deleteUser(id);
	    }
}