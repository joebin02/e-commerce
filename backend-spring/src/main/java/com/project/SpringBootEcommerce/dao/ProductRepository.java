package com.project.SpringBootEcommerce.dao;

import com.project.SpringBootEcommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
