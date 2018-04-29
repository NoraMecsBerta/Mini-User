package probation.miniuser.controller;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import probation.miniuser.model.User;
import probation.miniuser.service.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.xml.ws.Response;

import java.util.List;
import java.util.Map;

import static org.springframework.http.MediaType.APPLICATION_JSON;

@Controller
public class UserController {

    @Autowired
    UserService userService;


    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String indexPageCore() {
        return "index";
    }


    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public ResponseEntity createNewUser(@RequestBody Map<String, String> rb) {
        String userName = rb.get("name");
        String email = rb.get("email");
        //missing error handling when not managed to persist the data
        userService.addUser(new User(userName, email));
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
    public ResponseEntity listAllUsers() {
        List<User> users = userService.getAllUser();
        JSONArray jsonArrayOfUsers = new JSONArray();
        for (User user : users) {
            System.out.println(user.toString());
            JSONObject jsonObjectOfUser = new JSONObject();
            jsonObjectOfUser.put("id", user.getId());
            jsonObjectOfUser.put("name", user.getUserName());
            jsonObjectOfUser.put("email", user.geteMailAddress());
            jsonArrayOfUsers.put(jsonObjectOfUser);
        }

        System.out.println(jsonArrayOfUsers.toString());
        return new ResponseEntity<>(jsonArrayOfUsers.toString(), HttpStatus.OK);
    }


}
