import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

export class DOMHelper<T>{
    private fixture: ComponentFixture<T>;
    constructor(fixture:ComponentFixture<T>){
        this.fixture = fixture;
    }

    elementPresent(tagName: string){
        const ele = this.fixture.debugElement.query(By.css(tagName));
        if (ele) {
          return ele.nativeElement.textContent;
        }
      }
    countElements(tagName:string): number {
        const elements=this.fixture.debugElement.queryAll(By.css(tagName));
        return elements.length;
    }
}