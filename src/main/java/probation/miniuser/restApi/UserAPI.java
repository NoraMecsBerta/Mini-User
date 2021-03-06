package probation.miniuser.restApi;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import probation.miniuser.model.User;
import probation.miniuser.service.UserService;
import java.util.List;
import java.util.Map;


@RestController
public class UserAPI {


    @Autowired
    UserService userService;


    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public ResponseEntity createNewUser(@RequestBody Map<String, String> userData) {
        String userName = userData.get("name");
        String email = userData.get("email");
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


    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity delete(@PathVariable("id") int id) {
        userService.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
