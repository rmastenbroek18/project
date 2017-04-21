import { Component } from '@angular/core';
import { MockBackend } from '@angular/http/testing';
import { FileRestrictions, SelectEvent } from '@progress/kendo-angular-upload';
import { Response, ResponseOptions } from '@angular/http';


@Component({
    selector: 'Test-App',
    templateUrl: './test.component.html'
})

export class TestComponent{
    
    constructor(private backend: MockBackend) {
    /*
      Mocked backend service.
      For further details check:
      https://angular.io/docs/ts/latest/api/http/testing/index/MockBackend-class.html
    */
    this.backend.connections.subscribe((c: any) => {
      let response = new Response(<ResponseOptions>{ status: 200 });

      if (c.request.url === "C:\Users'\'rickk\Desktop\pictures") {
        c.mockDownload(response);

        setTimeout(() => {
          c.mockRespond(response);
        }, 1500);
      } else if (c.request.url === "removeUrl") {
        c.mockRespond(response);
      }
    });
  }
  uploadSaveUrl: string = "C:\Users\rickk\Desktop\pictures";
    uploadRemoveUrl: string = "removeUrl";

    myRestrictions: FileRestrictions = {
        allowedExtensions: [".jpg", ".png"]
    };

    selectEventHandler(e: SelectEvent) {
    console.log("File selected");
  }

}