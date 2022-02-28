import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
 
  client_title: String;
  client_subtitle: String;
  clients_list: Client[];
  

  constructor(private clientService: ClientService) { 
    this.client_title = "CLIENTES"
    this.client_subtitle = "Lista de clientes"  
    this.clients_list = [];  
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.clientService.getClients().subscribe(data => {
      this.clients_list = data;      
      console.log(this.clients_list)
    }, error => {
      console.log(error);
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Lo sentimos',
        text: 'Hubo un error. Comunícate con soporte',
        showConfirmButton: false,
        timer: 5000
      });
    });
  }

}
