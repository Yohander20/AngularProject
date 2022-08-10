import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  widthImg=10;
  name='Nicolas';
  age=18;
  imag='https://electronicssoftware.net/wp-content/uploads/user.png';
  btnDisable=true;
  register={
    name:'',
    email:'',
    password: ''
  }
  person={
    name:'Nicolas',
    age:18,
    avatar:'https://electronicssoftware.net/wp-content/uploads/user.png'
  }
  toggleButton(){
    this.btnDisable=!this.btnDisable;
  }

  increaseAge(){
   this.person.age+=1;
  }

  decretAge(){
    this.person.age-=1;
  }

  onScroll(event:Event){
    const element=event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  names: string[]=['Nico','Juli','Santi'];
  newName='';
  box={
    width:100,
    height:100,
    background:'red'
  };
  products=[
    {
      name:'manzana',
      price:565,
      image:'./assets/images/manzana.jpg',

    },
    {
      name:'maiz',
      price:600,
      image:'./assets/images/maiz.jpg'
    },
    {
      name:'huevos',
      price:200,
      image:'./assets/images/huevos.jpeg'
    },
    {
      name:'pescado',
      price:300,
      image:'./assets/images/pescado.jpg'
    },
    {
      name:'leche',
      price:300,
      image:'./assets/images/tipos-leche.jpg'
    }
  ]

  addName(){
    this.names.push(this.newName);
    this.newName='';
  }

  deleteName(index:number){
    this.names.splice(index,1);
  }

  onRegister(){
    console.log(this.register);
  }


}


