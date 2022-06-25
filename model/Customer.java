package com.codegym.model;

import javax.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @Column(columnDefinition = "VARCHAR(20)")
    private String customerId;
    @Column(columnDefinition = "VARCHAR(50)")
    private String customerName;
    private Integer customerAge;
    @Column(columnDefinition = "VARCHAR(50)")
    private String customerAddress;
    @Column(columnDefinition = "VARCHAR(11)")
    private String customerPhone;
    @Column(columnDefinition = "VARCHAR(50)")
    private String customerNote;
    private String customerUsername;
    @Column(columnDefinition = "BIT")
    private Boolean flag;

    @ManyToOne
    @JoinColumn(name = "customer_type_id", referencedColumnName = "customerTypeId")
    private CustomerType customerType;

    public Customer() {
    }

    public Customer(String customerId, String customerName, Integer customerAge, String customerPhone, String customerNote, String customerUsername, Boolean flag, CustomerType customerType) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerAge = customerAge;
        this.customerPhone = customerPhone;
        this.customerNote = customerNote;
        this.customerUsername = customerUsername;
        this.flag = flag;
        this.customerType = customerType;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public Integer getCustomerAge() {
        return customerAge;
    }

    public void setCustomerAge(Integer customerAge) {
        this.customerAge = customerAge;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }

    public String getCustomerNote() {
        return customerNote;
    }

    public void setCustomerNote(String customerNote) {
        this.customerNote = customerNote;
    }

    public String getCustomerUsername() {
        return customerUsername;
    }

    public void setCustomerUsername(String customerUsername) {
        this.customerUsername = customerUsername;
    }

    public Boolean getFlag() {
        return flag;
    }

    public void setFlag(Boolean flag) {
        this.flag = flag;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }
}
