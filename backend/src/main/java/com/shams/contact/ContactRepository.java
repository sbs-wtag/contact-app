package com.shams.contact;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface ContactRepository extends ReactiveCrudRepository<Contact, Long> {

}
