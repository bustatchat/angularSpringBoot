package com.example.demo.api;

import com.example.demo.db.UserRepository;
import com.example.demo.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController // This means that this class is a Controller
@RequestMapping(path="/api/users")
@CrossOrigin
public class UserController {
    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
private UserRepository userRepository;

@PostMapping(path="/add") // Map ONLY POST Requests
public @ResponseBody String addNewUser (@RequestParam String name
 , @RequestParam String email) {
// @ResponseBody means the returned String is the response, not a view name
// @RequestParam means it is a parameter from the GET or POST request

User user = new User();
user.setName(name);
user.setEmail(email);
userRepository.save(user);
return "Saved";
}

@GetMapping(path="/all")
public @ResponseBody Iterable<User> getAllUsers() {
// This returns a JSON or XML with the users
return userRepository.findAll();
}  
}