package com.shams.contact;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class ContactService {

  private final ContactRepository contactRepository;

  @Transactional(readOnly = true)
  public Flux<Contact> getAll() {
    return contactRepository.findAll();
  }

  @Transactional
  public Mono<Contact> save(Contact contact) {
    return contactRepository.save(contact);
  }

  @Transactional
  public Mono<Void> delete(long id) {
    return contactRepository.deleteById(id);
  }
}
