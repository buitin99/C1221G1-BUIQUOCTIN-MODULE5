package com.quoctin.repository;

import com.quoctin.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarRepository extends JpaRepository<Car,Integer> {
}
