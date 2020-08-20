package com.example.demo.model;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Null;

@Entity // This tells Hibernate to make a table out of this class
public class User {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer user_id;
  private String first_name;
  private String last_name;
  private Boolean is_admin;
  private String email;
  private Date created_date;
  private String created_ip;
  @Null
  private Date changed_date;
  @Null
  private String changed_ip;
  @Column(columnDefinition = "integer default 0")
  private int deleted;

  public User(String email, String firstName, String lastName,Boolean isAdmin ) {

    try {
      this.first_name   = firstName;
      this.last_name    = lastName;
      this.is_admin     = isAdmin;
      this.email        = email;
      this.created_date = new Date();
      this.created_ip   = InetAddress.getLocalHost().getHostAddress();
      this.deleted      = 0;
   } catch (UnknownHostException ex) {
           
   }

  }

  public String getChangedIP() {
    return this.changed_ip;
  }

  public void setdeleted(int deleted) {
    this.deleted = deleted;
  }
  public String getCreatedIP() {
    return this.created_ip;
  }

  public Date getCreatedDate() {
    return this.created_date;
  }

  public Date getChangedDate() {
    return this.changed_date;
  }

  public Integer getId() {
    return user_id;
  }

  public void setId(Integer id) {
    this.user_id = id;
  }

  public String getFirstName() {
    return this.first_name;
  }

  public String getLastNameName() {
    return this.last_name;
  }

  public Boolean getIsAdmin() {
    return this.is_admin;
  }

  public void setName(String firstName) {
    this.first_name = firstName;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }
}