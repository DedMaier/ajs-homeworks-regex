import Validator from '../basic';

test('Объект должен пропускать логин', () => {
  const login = new Validator('Slava');

  expect(login.validateUsername()).toBe(true);
});

test('Объект должен пропускать логин', () => {
  const login = new Validator('Sl-a-va');

  expect(login.validateUsername()).toBe(true);
});

test('Объект должен пропускать логин', () => {
  const login = new Validator('Sl_a-vA');

  expect(login.validateUsername()).toBe(true);
});

test('Объект должен пропускать логин', () => {
  const login = new Validator('Sl44vA');

  expect(login.validateUsername()).toBe(true);
});

test('Объект должен пропускать логин', () => {
  const login = new Validator('Sl444-vA');

  expect(login.validateUsername()).toBe(true);
});

test('Объект должен пропускать логин', () => {
  const login = new Validator('Sl444-444vA');

  expect(login.validateUsername()).toBe(true);
});

test('Объект не должен пропускать логин', () => {
  const login = new Validator('Slava44');

  expect(login.validateUsername()).toBe(false);
});

test('Объект не должен пропускать логин', () => {
  const login = new Validator('_Slava44');

  expect(login.validateUsername()).toBe(false);
});

test('Объект не должен пропускать логин', () => {
  const login = new Validator('Slava_');

  expect(login.validateUsername()).toBe(false);
});

test('Объект не должен пропускать логин', () => {
  const login = new Validator('Sl_a-vA$');

  expect(login.validateUsername()).toBe(false);
});
