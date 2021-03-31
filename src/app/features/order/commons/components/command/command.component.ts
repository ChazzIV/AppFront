import { Component, OnInit } from '@angular/core';
import {CommandService} from '../../services/command.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Pedido} from '../../../models/pedido.model';
import {Articulo} from '../../../models/articulo.model';
import {Categorias} from '../../../../portal/models/categorias.model';
import {Productos} from '../../../../portal/models/productos.model';


@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  pedido: Pedido = {
    cajero: null,
    forma_pago: null,
    importe: null,
    descuento: null,
    subtotal: null,
    iva: null,
    total: null,
    pago: null,
    cambio: null,
  };

  articulo: Articulo = {
    pedido_id: null,
    products_id: null,
    // articulo: null,
    cantidad: null,
    precio_compra: null,
    subtotal: null,
  };

  categorias: Categorias[];
  productos: Productos[];
  articulos: Articulo[];
  total: any;


  constructor(private commandService: CommandService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {


  }


  ngOnInit(): void {
    this.commandService.obtenerCategorias().subscribe( res => {
      this.categorias = res;
    });

    this.commandService.obtenerProductos().subscribe( res => {
      this.productos = res;
    });

  }

  savePedido(): any {

  }

  agregar(): any {

  }
  remover(i): any {

  }

}
