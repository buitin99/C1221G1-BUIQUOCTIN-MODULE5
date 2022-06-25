package com.codegym.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "customer_type")
public class CustomerType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerTypeId;
    @Column(columnDefinition = "VARCHAR(25)")
    private String customerTypeName;

    @OneToMany(mappedBy = "customerType")
    private List<Customer> customerList;

    public CustomerType() {
    }

    public CustomerType(Integer customerTypeId, String customerTypeName, List<Customer> customerList) {
        this.customerTypeId = customerTypeId;
        this.customerTypeName = customerTypeName;
        this.customerList = customerList;
    }

    public Integer getCustomerTypeId() {
        return customerTypeId;
    }

    public void setCustomerTypeId(Integer customerTypeId) {
        this.customerTypeId = customerTypeId;
    }

    public String getCustomerTypeName() {
        return customerTypeName;
    }

    public void setCustomerTypeName(String customerTypeName) {
        this.customerTypeName = customerTypeName;
    }

    public List<Customer> getCustomerList() {
        return customerList;
    }

    public void setCustomerList(List<Customer> customerList) {
        this.customerList = customerList;
    }
}
