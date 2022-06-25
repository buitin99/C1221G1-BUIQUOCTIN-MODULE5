package com.quoctin.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
@JsonIgnoreProperties({"typeList"})
public class Type {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @OneToMany(mappedBy = "type")
    private List<Car> typeList;

    public Type() {
    }

    public Type(String name, List<Car> typeList) {
        this.name = name;
        this.typeList = typeList;
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

    public List<Car> getTypeList() {
        return typeList;
    }

    public void setTypeList(List<Car> typeList) {
        this.typeList = typeList;
    }
}
