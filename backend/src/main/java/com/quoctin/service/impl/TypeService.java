package com.quoctin.service.impl;

import com.quoctin.model.Type;
import com.quoctin.repository.ITypeRepository;
import com.quoctin.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeService implements ITypeService {

    @Autowired
    private ITypeRepository typeRepository;

    @Override
    public List<Type> findAll() {
        return typeRepository.findAll();
    }
}
