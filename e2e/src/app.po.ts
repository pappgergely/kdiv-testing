import { browser, by, element, ElementFinder } from 'protractor';
import {Gender, Student} from "../../src/app/interfaces/student"; 

export class AppPage {
  navigateTo(url?: string): Promise<unknown> {
    return browser.get(browser.baseUrl + (url ? url : '')) as Promise<unknown>;
  }
  getUrl(): Promise<string> {
    return browser.getCurrentUrl() as Promise<string>;
  }
  /*
  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
  */

  private getHeaderButton(): ElementFinder {
    return element(by.css('app-header .btn'));
  }
  clickHeaderButton(): Promise<void> {
    return this.getHeaderButton().click() as Promise<void>;
  }
  getHeaderText(): Promise<string> {
    return element(by.css('app-header h1')).getText() as Promise<string>;
  }
  getHeaderButtonText(): Promise<string> {
    return this.getHeaderButton().getText() as Promise<string>;
  }

  private getInput(id: string): ElementFinder {
    return element(by.id(id));
  }
  fillStudentForm(student: Student): Promise<void> {
    this.getInput('inputName').sendKeys(student.name);
    this.getInput('inputEmail').sendKeys(student.email);
    this.getInput('inputAge').sendKeys(student.age);
    return this.getInput('inputGender').sendKeys(student.gender === Gender.MALE ? 'Férfi' : 'Nő') as Promise<void>;
  }
  clickAddButton(): Promise<void> {
    return element(by.buttonText('Mentés')).click() as Promise<void>;
  }

  isStudentTableRowContaining(s: string): Promise<boolean> {
    return element(by.cssContainingText('tbody tr', s)).isPresent() as Promise<boolean>;
  }
}
