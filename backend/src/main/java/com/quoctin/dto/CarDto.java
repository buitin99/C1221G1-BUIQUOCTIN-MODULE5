package com.quoctin.dto;

import com.quoctin.model.City;
import com.quoctin.model.Type;

public class CarDto {

    private Integer id;
    private String licensePlates;
    private String name;
    private String phone;
    private String email;
    private String startTime;
    private String endTime;
    private Type type;
    private City departure;
    private City destination;

    public CarDto() {
    }

    public CarDto(String licensePlates, String name, String phone, String email, String startTime, String endTime, Type type, City departure, City destination) {
        this.licensePlates = licensePlates;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.startTime = startTime;
        this.endTime = endTime;
        this.type = type;
        this.departure = departure;
        this.destination = destination;
    }

    public Integer getId() {
        return id;
    }

    public String getLicensePlates() {
        return licensePlates;
    }

    public void setLicensePlates(String licensePlates) {
        this.licensePlates = licensePlates;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public City getDeparture() {
        return departure;
    }

    public void setDeparture(City departure) {
        this.departure = departure;
    }

    public City getDestination() {
        return destination;
    }

    public void setDestination(City destination) {
        this.destination = destination;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
