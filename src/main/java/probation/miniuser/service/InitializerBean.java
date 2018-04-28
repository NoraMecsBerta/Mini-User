package probation.miniuser.service;

import org.springframework.stereotype.Component;
import probation.miniuser.model.User;

@Component
public class InitializerBean {

    public InitializerBean(UserService userService) {
        userService.addUser(new User("John Smith", "jsmith@yahoo.com"));
    }
}
