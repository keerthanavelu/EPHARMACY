package com.medeasy.service;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

import java.security.Principal;
import java.util.Optional;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.medeasy.model.Users;
import com.medeasy.repository.UsersRegister;

public class CurrentUserServiceITest {
@InjectMocks
	CurrentUserService currentuser;
@Mock
UsersRegister usersRegister;
Users user=new Users("a@gmail.com","1234",1,"user","a","987654321","male","chennai");
Optional<Users> users=Optional.of(user);


	@Before
	public void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void testGetUser() {
		
		when(usersRegister.findByEmail("name")).thenReturn(users);
		//assertEquals(currentuser.getUser(new Principal("name")),users.get());
	}

}
