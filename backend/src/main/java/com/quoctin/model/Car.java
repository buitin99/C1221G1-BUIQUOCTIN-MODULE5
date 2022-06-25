package com.quoctin.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String licensePlates;
    private String name;
    private String phone;
    private String email;
    private String startTime;
    private String endTime;

    @ManyToOne
    @JoinColumn(name = "type_id", referencedColumnName = "id")
    private Type type;

    @ManyToOne
    @JoinColumn(name = "departure_id", referencedColumnName = "id")
    private City departure;

    @ManyToOne
    @JoinColumn(name = "destination_id", referencedColumnName = "id")
    private City destination;

    public Car() {
    }

    public Car(String licensePlates, String name, String phone, String email, String startTime, String endTime, Type type, City departure, City destination) {
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

    public void setId(Integer id) {
        this.id = id;
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
}
