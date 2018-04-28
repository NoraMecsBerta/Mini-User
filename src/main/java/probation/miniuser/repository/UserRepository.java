package probation.miniuser.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import probation.miniuser.model.User;
import java.io.Serializable;


public interface UserRepository extends Serializable, JpaRepository<User, Integer>{



}
