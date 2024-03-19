package com.example.entity;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tasks")
//@AllArgsConstructor      //we can see all the attributes
//@Data
//@NoArgsConstructor
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Id")
    private Long id;

    @Column(unique = true)
    private String taskId;

    private String description;
    private int plannedDuration;
    private int actualDuration;
    private LocalDateTime plannedStartTime;
    private LocalDateTime plannedEndTime;
    private LocalDateTime actualStartTime;
    private LocalDateTime actualEndTime;

    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @ManyToOne
    @JoinColumn(name = "employer_id")
    private Employer assignedBy;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee assignedTo;
    private int priority;
	public Task(Long id, String taskId, String description, int plannedDuration, int actualDuration,
			LocalDateTime plannedStartTime, LocalDateTime plannedEndTime, LocalDateTime actualStartTime,
			LocalDateTime actualEndTime, TaskStatus status, Employer assignedBy, Employee assignedTo,int priority) {
		super();
		this.id = id;
		this.taskId = taskId;
		this.description = description;
		this.plannedDuration = plannedDuration;
		this.actualDuration = actualDuration;
		this.plannedStartTime = plannedStartTime;
		this.plannedEndTime = plannedEndTime;
		this.actualStartTime = actualStartTime;
		this.actualEndTime = actualEndTime;
		this.status = status;
		this.assignedBy = assignedBy;
		this.assignedTo = assignedTo;
		this.priority=priority;
	}

	public Task() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPlannedDuration() {
		return plannedDuration;
	}

	public void setPlannedDuration(int plannedDuration) {
		this.plannedDuration = plannedDuration;
	}

	public int getActualDuration() {
		return actualDuration;
	}

	public void setActualDuration(int actualDuration) {
		this.actualDuration = actualDuration;
	}

	public LocalDateTime getPlannedStartTime() {
		return plannedStartTime;
	}

	public void setPlannedStartTime(LocalDateTime plannedStartTime) {
		this.plannedStartTime = plannedStartTime;
	}

	public LocalDateTime getPlannedEndTime() {
		return plannedEndTime;
	}

	public void setPlannedEndTime(LocalDateTime plannedEndTime) {
		this.plannedEndTime = plannedEndTime;
	}

	public LocalDateTime getActualStartTime() {
		return actualStartTime;
	}

	public void setActualStartTime(LocalDateTime actualStartTime) {
		this.actualStartTime = actualStartTime;
	}

	public LocalDateTime getActualEndTime() {
		return actualEndTime;
	}

	public void setActualEndTime(LocalDateTime actualEndTime) {
		this.actualEndTime = actualEndTime;
	}

	public TaskStatus getStatus() {
		return status;
	}

	public void setStatus(TaskStatus status) {
		this.status = status;
	}

	public Employer getAssignedBy() {
		return assignedBy;
	}

	public void setAssignedBy(Employer assignedBy) {
		this.assignedBy = assignedBy;
	}

	public Employee getAssignedTo() {
		return assignedTo;
	}

	public void setAssignedTo(Employee assignedTo) {
		this.assignedTo = assignedTo;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", taskId=" + taskId + ", description=" + description + ", plannedDuration="
				+ plannedDuration + ", actualDuration=" + actualDuration + ", plannedStartTime=" + plannedStartTime
				+ ", plannedEndTime=" + plannedEndTime + ", actualStartTime=" + actualStartTime + ", actualEndTime="
				+ actualEndTime + ", status=" + status + ", assignedBy=" + assignedBy + ", assignedTo=" + assignedTo
				+ ", priority=" + priority + "]";
	}

	
    
    
}
