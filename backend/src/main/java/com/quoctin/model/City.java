package com.quoctin.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
@JsonIgnoreProperties({"departureList","destinationList"})
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;


    @OneToMany(mappedBy = "departure")
    private List<Car> departureList;


    @OneToMany(mappedBy = "destination")
    private List<Car> destinationList;

    public City() {
    }

    public City(String name, List<Car> departureList, List<Car> destinationList) {
        this.name = name;
        this.departureList = departureList;
        this.destinationList = destinationList;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Car> getDepartureList() {
        return departureList;
    }

    public void setDepartureList(List<Car> departureList) {
        this.departureList = departureList;
    }

    public List<Car> getDestinationList() {
        return destinationList;
    }

    public void setDestinationList(List<Car> destinationList) {
        this.destinationList = destinationList;
    }
}
