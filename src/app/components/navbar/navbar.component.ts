import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [ProductListComponent]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
    
  }

  /**
   * Inicializa el formulario del campo de text en
   * la barra de busqueda
   */
  initForm(){
    this.form = this.fb.group({
      query: new FormControl('')
    });
  }

  /**
   * Evento click en el boton de busqueda
   * Envia el termino de busqueda al componente de lista de productos
   */
  onClickSearch() {
    this.router.navigate(['/items/search', this.form.get('query')?.value]);
  }

}
