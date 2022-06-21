package com.quoctin.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Type {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @OneToMany(mappedBy = "type")
    private List<Car> typeList;

}
