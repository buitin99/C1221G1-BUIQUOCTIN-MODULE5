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
    private City cityDeparture;

    @ManyToOne
    @JoinColumn(name = "destination_id", referencedColumnName = "id")
    private City cityDestination;

}
