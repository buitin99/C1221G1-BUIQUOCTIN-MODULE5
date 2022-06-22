package com.quoctin.repository;

import com.quoctin.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICityRepository extends JpaRepository<City, Integer> {
}
