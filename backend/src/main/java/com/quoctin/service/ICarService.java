package com.quoctin.service;

import com.quoctin.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICarService {
    Page<Car> findAll(Pageable pageable);

    Car findById(int id);

    void save(Car cars);

    void deleteById(int id);
}
