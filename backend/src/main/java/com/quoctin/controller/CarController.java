package com.quoctin.controller;

import com.quoctin.dto.CarDto;
import com.quoctin.model.Car;
import com.quoctin.model.City;
import com.quoctin.model.Type;
import com.quoctin.service.ICarService;
import com.quoctin.service.ICityService;
import com.quoctin.service.ITypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RequestMapping("carCustomer")
@RestController
public class CarController {

    @Autowired
    private ICarService carService;

    @Autowired
    private ICityService cityService;

    @Autowired
    private ITypeService typeService;

    @ModelAttribute("city")
    public List<City> cityList() {
        return cityService.findAll();
    }

    @ModelAttribute("type")
    public List<Type> typeList() {
        return typeService.findAll();
    }

    @GetMapping("/list")
    public ResponseEntity<Page<Car>> getCarList(Model model,
                                                @PageableDefault(value = 3) Pageable pageable
                                                ) {
        Page<Car> cars = this.carService.findAll(pageable);
        if (!cars.hasContent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(cars, HttpStatus.OK);
    }

    @GetMapping("findById/{id}")
    public ResponseEntity<Car> getCar(@PathVariable("id") int id) {
        Car cars = carService.findById(id);
        System.err.println("ID");
        System.err.println(cars);
        if (cars == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(cars, HttpStatus.OK);
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity<?> updateCar(@RequestBody Car cars) {
        System.out.println(cars);
        carService.save(cars);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<Car> delete(@PathVariable int id) {
        Optional<Car> optionalCarRegister = Optional.ofNullable(this.carService.findById(id));
        if (!optionalCarRegister.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        this.carService.deleteById(id);
        return new ResponseEntity<>(optionalCarRegister.get(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveCar(@RequestBody Car Cars) {
        carService.save(Cars);
        return new ResponseEntity<>(HttpStatus.OK);
    }



}
