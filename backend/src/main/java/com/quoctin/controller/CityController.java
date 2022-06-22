package com.quoctin.controller;

import com.quoctin.model.Car;
import com.quoctin.model.City;
import com.quoctin.model.Type;
import com.quoctin.service.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequestMapping("city")
@RestController
public class CityController {
    @Autowired
    private ICityService cityService;

    @GetMapping("list")
    public ResponseEntity<List<City>> cityList() {
        List<City> citysList = this.cityService.findAll();
        if (citysList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(citysList, HttpStatus.OK);
    }
}
