package com.quoctin.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @OneToMany(mappedBy = "cityDeparture")
    private List<Car> departureList;

    @OneToMany(mappedBy = "cityDestination")
    private List<Car> destinationList;


}
