package com.quoctin.service.impl;

import com.quoctin.model.Car;
import com.quoctin.repository.ICarRepository;
import com.quoctin.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CarService implements ICarService {

    @Autowired
    private ICarRepository carRepository;

    @Override
    public Page<Car> findAll(Pageable pageable) {
        return carRepository.findAll(pageable);
    }

    @Override
    public Car findById(int id) {
        return carRepository.findById(id).orElse(null);
    }

    @Override
    public void save(Car cars) {
        this.carRepository.save(cars);
    }

    @Override
    public void deleteById(int id) {
        this.carRepository.deleteById(id);
    }
}
