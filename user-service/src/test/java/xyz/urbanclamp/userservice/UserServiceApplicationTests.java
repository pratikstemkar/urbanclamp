package xyz.urbanclamp.userservice;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.junit.jupiter.Testcontainers;
import com.fasterxml.jackson.databind.ObjectMapper;
import xyz.urbanclamp.userservice.dto.UserDTO;

import java.util.Set;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@Testcontainers
@AutoConfigureMockMvc
class UserServiceApplicationTests {

	@Autowired
	public MockMvc mockMvc;

	private static MySQLContainer<?> mysqlContainer;

	@Autowired
	private ObjectMapper objectMapper;

	@BeforeAll
	public static void setUp() {
		mysqlContainer = new MySQLContainer<>("mysql:8.0.28")
				.withDatabaseName("testdb")
				.withUsername("root")
				.withPassword("Root@1234");
		mysqlContainer.start();

		System.setProperty("spring.datasource.url", mysqlContainer.getJdbcUrl());
		System.setProperty("spring.datasource.username", mysqlContainer.getUsername());
		System.setProperty("spring.datasource.password", mysqlContainer.getPassword());
	}

	@Test
	public void testGetAllUsers() throws Exception {
		mockMvc.perform(get("/api/users"))
				.andExpect(status().isOk())
				.andExpect(content().contentType(String.valueOf(MediaType.APPLICATION_JSON)));
	}


	@Test
	public void testGetUserById() throws Exception {

		mockMvc.perform(get("/api/users/{id}", 1L))
				.andExpect(status().isOk())
				.andExpect(content().contentType(String.valueOf(MediaType.APPLICATION_JSON)));
	}


	@Test
	public void testCreateUser () throws Exception {
		UserDTO userdetails = createUser();
		String usercreation = objectMapper.writeValueAsString(userdetails);

		mockMvc.perform(MockMvcRequestBuilders.post("/api/users")
						.contentType(MediaType.APPLICATION_JSON)
						.content(usercreation))
				.andExpect(status().isCreated());
	}
	public UserDTO createUser() {
		return UserDTO.builder()
				.name("pratik sunil temkar")
				.email("jane.doe@example.com")
				.phoneNumber("987-654-3210")
				.roles(Set.of("ADMIN"))
				.status("ACTIVE")
				.gender("FEMALE")
				.picture("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pickpik.com%2Fsunset-girl-dance-shadow-silhouette-sky-148706&psig=AOvVaw1bPQT1wniC-VjHsjwwH_eZ&ust=1739201609697000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjHzIL1tosDFQAAAAAdAAAAABAE")
				.build();
	}

	@Test
	public void testUpdateUser () throws Exception {
		UserDTO userdetails = UpdateUser();
		String userupdation = objectMapper.writeValueAsString(userdetails);
		mockMvc.perform(MockMvcRequestBuilders.put("/api/users/{id}", 1L)
						.contentType(MediaType.APPLICATION_JSON)
						.content(userupdation))
				.andExpect(status().isOk());
	}

	private UserDTO UpdateUser () throws Exception {
		return UserDTO.builder()
				.name("pratik sunil temkar")
				.email("jane.doe@example.com")
				.phoneNumber("945-654-4576")
				.roles(Set.of("ADMIN"))
				.status("ACTIVE")
				.gender("MALE")
				.picture("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fsilhouette-of-a-boys-profile-against-sunset-sky-14653174%2F&psig=AOvVaw3XRxjMp-t8kt9E-448BNgG&ust=1739201560667000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiI7ev0tosDFQAAAAAdAAAAABAE")
				.build();
	}

	@Test
	public void testDeleteUser () throws Exception {
		mockMvc.perform(delete("/api/users/{id}", 1L))
				.andExpect(status().isNoContent());
	}
}

