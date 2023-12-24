import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent {
  cliente_list: Cliente[] = [];

  constructor(private clienteService: ClienteService){
    
  }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      cliente_list => this.cliente_list = cliente_list
    );
  }
} 
