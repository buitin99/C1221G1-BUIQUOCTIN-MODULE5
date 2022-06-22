package com.quoctin.service.impl;

import com.quoctin.model.City;
import com.quoctin.repository.ICityRepository;
import com.quoctin.service.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService implements ICityService {

    @Autowired
    private ICityRepository cityRepository;

    @Override
    public List<City> findAll() {
        return cityRepository.findAll();
    }
}
