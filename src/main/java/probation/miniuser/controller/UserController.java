package probation.miniuser.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import probation.miniuser.service.UserService;

@Controller
public class UserController {

    @Autowired
    UserService userService;


    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String indexPageCore() {
        return "index";
    }


}
