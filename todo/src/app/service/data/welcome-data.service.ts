import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorlBean {
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorlBean>('http://localhost:8080/hello-world-bean')
  }

  //'http://localhost:8080/hello-world-bean/path-variable/{name}'
  executeHelloWorldBeanServiceWithPathVariable(name) {
    return this.http.get<HelloWorlBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`)
  }
}
