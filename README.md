<!-- # Chapter1

<div *ngIf="selectstate=='pakistan'" class="haris">
  <h4>haris khan</h4>
</div>
<input type="checkbox" [(ngModel)]="isActive">
<select  [(ngModel)]="selectstate">
  <option value="">select</option>
  <option value="pakistan"> pakistan</option>
  <option value="china"> china</option>
  <option  value="palastain">palastain</option>
  <option value="iran"> iran</option>

</select>
  selectstate :string = '';
isActive =false;

 -->

<!-- <table>
  <thead>
    <tr>
      <th>No</th>
      <th>name</th>
      <th>email</th>
      <th>skill</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let detail of Details">
      <td>{{detail.No}}</td>
      <td>{{ detail.name }}</td>
      <td>{{ detail.email }}</td>
      <td>{{ detail.skill }}</td>
    
    </tr>
  </tbody>
</table> -->
<!-- Details : any[]  = [
        
            {No:1, name:'haris', email:'12@gmail.com', skill:'angular'},
            {No:2, name:'zain', email:'13@gmail.com', skill:'php'},
            {No:3, name:'hashir', email:'14@gmail.com', skill:'java'},
           {No:4, name:'hurairah', email:'45@gmail.com', skill:'phython'}

      ] -->

<!-- <div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
  </div>
  <div class="alert alert-secondary" role="alert">
    A simple secondary alert—check it out!
  </div>
  <div class="alert alert-success" role="alert">
    A simple success alert—check it out!
  </div>
  <div class="alert alert-danger" role="alert">
    A simple danger alert—check it out!
  </div>
  <div class="alert alert-warning" role="alert">
    A simple warning alert—check it out!
  </div>
  <div class="alert alert-info" role="alert">
    A simple info alert—check it out!
  </div>
  <div class="alert alert-light" role="alert">
    A simple light alert—check it out!
  </div>
  <div class="alert alert-dark" role="alert">
    A simple dark alert—check it out!
  </div>
 -->


<!-- <div class="header">
    <div class="link">
        <a href="">ALL CATEGORIES</a>
        <a href="">Book</a>
        <a href="">Music</a>
        <a href="">Food</a>
        <a href="">Perfume</a>
        <a href="">Medical</a>

    </div> -->
    <!-- /* hero header */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 10px;
isolation: isolate;

width: 1440px;
height: 665px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0; -->

Z2mqX





















This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Development server 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
