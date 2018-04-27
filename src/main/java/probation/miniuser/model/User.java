package probation.miniuser.model;

import javax.persistence.*;

@Entity
@Table(name = "Mini-users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String userName;
    private String eMailAddress;


    public User(String userName, String eMailAddress) {
        this.userName = userName;
        this.eMailAddress = eMailAddress;
    }


    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String geteMailAddress() {
        return eMailAddress;
    }

    public void seteMailAddress(String eMailAddress) {
        this.eMailAddress = eMailAddress;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}