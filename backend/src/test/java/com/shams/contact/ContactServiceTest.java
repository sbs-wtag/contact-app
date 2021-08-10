package com.shams.contact;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class ContactServiceTest {

  @InjectMocks
  private ContactService contactService;

  @Mock
  private ContactRepository contactRepository;

  @Test
  void notNull() {
    assertNotNull(contactService);
    assertNotNull(contactRepository);
  }
}