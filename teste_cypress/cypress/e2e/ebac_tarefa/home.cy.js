/// <reference types="cypress" />

describe('Testes de funcionalidades', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Deve testar a inclusão do contato', () => {
    cy.get('[type="text"]').type('Jonathan Costa');
    cy.get('[type="email"]').type('jd@gmail.com');
    cy.get('[type="tel"]').type('84 9 9904-3539');
    cy.get('button[type="submit"]').click();
  });

  it('Deve testar a alteração das informações do contato', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').first().click();
    cy.get('[type="text"]').type(' da Ebac');
    cy.get('.alterar').click();
  });
  it('Deve testar a exclusão das informações do contato', () => {
    cy.get(':nth-child(3) > .sc-gueYoa > .delete').click();
  });
});
