package com.medeasy.service;

import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.medeasy.model.Items;
import com.medeasy.model.Users;
import com.medeasy.repository.ItemsRepositoryClass;
import com.medeasy.repository.UsersRepositoryClass;

public class CartServiceTest {
	@InjectMocks
	CartService cartService;
	@Mock
	UsersRepositoryClass usersRepositoryClass;
	@Mock
	ItemsRepositoryClass itemsRepositoryClass;
	@Before
	public void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void testGetEmail() {
		Users users =new Users();
		users.setId(0);
		users.setName("serg");
		users.setPassword("74jhtuopskd");
		//when(usersRepositoryClass.getByEmail(anyString())).thenReturn(users);
	}

	@Test
	public void testAddItemToCart() {
		Items items=new Items();
		items.setBrand("medicine");
		items.setName("thermometer");
		items.setQuantity(2);
		items.setUnitPrice(100);
		
		//when(itemsRepositoryClass.getById(anyInt())).thenReturn(items);
		
	}

}
