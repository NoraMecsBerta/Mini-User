package probation.miniuser.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import probation.miniuser.model.User;
import probation.miniuser.repository.UserRepository;

import java.util.List;


@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public void deleteById(int id) {
        userRepository.delete(id);
    }

    public void addUser(User newUser) {
        userRepository.save(newUser);
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

}
