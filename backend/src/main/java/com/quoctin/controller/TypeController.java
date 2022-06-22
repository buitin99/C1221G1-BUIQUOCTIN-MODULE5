package com.quoctin.controller;

import com.quoctin.model.City;
import com.quoctin.model.Type;
import com.quoctin.service.ICityService;
import com.quoctin.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RequestMapping("types")
@RestController
public class TypeController {

    @Autowired
    private ITypeService typeService;

    @GetMapping("list")
    public ResponseEntity<List<Type>> typeList() {
        List<Type> typesList = this.typeService.findAll();
        System.out.println(typesList);
        if (typesList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(typesList, HttpStatus.OK);
    }
}
