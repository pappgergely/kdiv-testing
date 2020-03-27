import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import {Gender, Student} from "../../src/app/interfaces/student"; 

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to add screen', () => {
    page.navigateTo();
    page.clickHeaderButton();
    expect(page.getHeaderText()).toBe('Hozzáadás');
    expect(page.getHeaderButtonText()).toBe('Vissza');
  });

  it('should add a new student', () => {
    const student: Student = {
      name: 'Gipsz Jakab ' + (new Date().getTime()),
      age: 42,
      email: 'gipsz.jakab@kdiv.hu',
      gender: Gender.MALE,
    };
    page.navigateTo('add-student');
    page.fillStudentForm(student);
    page.clickAddButton();
    expect(page.getUrl()).toBe(browser.baseUrl + 'students');
    expect(page.isStudentTableRowContaining(student.name)).toBeTruthy();
  });

  // sikeres módosítás
  // rossz email cím esetén hibaüzenet a módosításkor, nem klikkelhető submit gomb
  // módosításnál többi hibaüzenetet is végigellenőrizni
  // törlés

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
