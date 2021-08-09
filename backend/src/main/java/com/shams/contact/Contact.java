package com.shams.contact;

import javax.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("contacts")
public class Contact {

  @Id private long id;

  @NotNull
  @Column("name")
  private String name;

  @NotNull
  @Column("email")
  private String email;
}
