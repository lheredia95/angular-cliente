import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';



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

  delete(cliente: Cliente): void {
    Swal.fire({
      title: "Esta seguro?",
      text: `¿Seguro que desea eliminar el cliente ${cliente.nombre}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.cliente_list = this.cliente_list.filter(cli => cli !== cliente)
            Swal.fire({
              title: "Eliminado!",
              text: `${cliente.nombre} eliminado correctamente`,
              icon: "success"
            });
          }
        )
      }
    });
  }

  
} 
