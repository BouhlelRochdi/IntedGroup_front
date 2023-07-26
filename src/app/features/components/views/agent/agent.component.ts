import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store';
import { OPEN } from 'src/app/store/dialogs/dialogs.action';



@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent {
  _store = inject(Store<AppStateInterface>)


  demands: any[] = [
    {
      id: '1000',
      email: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      type: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1001',
      email: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      type: 'Accessories',
      quantity: 61,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4
    },
    {
      id: '1002',
      email: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      type: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3
    },
    {
      id: '1003',
      email: '244wgerg2',
      name: 'Blue T-Shirt',
      description: 'Product Description',
      image: 'blue-t-shirt.jpg',
      price: 29,
      type: 'Clothing',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1004',
      email: 'h456wer53',
      name: 'Bracelet',
      description: 'Product Description',
      image: 'bracelet.jpg',
      price: 15,
      type: 'Accessories',
      quantity: 73,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1005',
      email: 'av2231fwg',
      name: 'Brown Purse',
      description: 'Product Description',
      image: 'brown-purse.jpg',
      price: 120,
      type: 'Accessories',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4
    },
    {
      id: '1006',
      email: 'bib36pfvm',
      name: 'Chakra Bracelet',
      description: 'Product Description',
      image: 'chakra-bracelet.jpg',
      price: 32,
      type: 'Accessories',
      quantity: 5,
      inventoryStatus: 'LOWSTOCK',
      rating: 3
    },
    {
      id: '1007',
      email: 'mbvjkgip5',
      name: 'Galaxy Earrings',
      description: 'Product Description',
      image: 'galaxy-earrings.jpg',
      price: 34,
      type: 'Accessories',
      quantity: 23,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1008',
      email: 'vbb124btr',
      name: 'Game Controller',
      description: 'Product Description',
      image: 'game-controller.jpg',
      price: 99,
      type: 'Electronics',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 4
    },
    {
      id: '1009',
      email: 'cm230f032',
      name: 'Gaming Set',
      description: 'Product Description',
      image: 'gaming-set.jpg',
      price: 299,
      type: 'Electronics',
      quantity: 63,
      inventoryStatus: 'INSTOCK',
      rating: 3
    },
    {
      id: '1010',
      email: 'plb34234v',
      name: 'Gold Phone Case',
      description: 'Product Description',
      image: 'gold-phone-case.jpg',
      price: 24,
      type: 'Accessories',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4
    },
    {
      id: '1011',
      email: '4920nnc2d',
      name: 'Green Earbuds',
      description: 'Product Description',
      image: 'green-earbuds.jpg',
      price: 89,
      type: 'Electronics',
      quantity: 23,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1012',
      email: '250vm23cc',
      name: 'Green T-Shirt',
      description: 'Product Description',
      image: 'green-t-shirt.jpg',
      price: 49,
      type: 'Clothing',
      quantity: 74,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1013',
      email: 'fldsmn31b',
      name: 'Grey T-Shirt',
      description: 'Product Description',
      image: 'grey-t-shirt.jpg',
      price: 48,
      type: 'Clothing',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 3
    },
    {
      id: '1014',
      email: 'waas1x2as',
      name: 'Headphones',
      description: 'Product Description',
      image: 'headphones.jpg',
      price: 175,
      type: 'Electronics',
      quantity: 8,
      inventoryStatus: 'LOWSTOCK',
      rating: 5
    },
    {
      id: '1015',
      email: 'vb34btbg5',
      name: 'Light Green T-Shirt',
      description: 'Product Description',
      image: 'light-green-t-shirt.jpg',
      price: 49,
      type: 'Clothing',
      quantity: 34,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1016',
      email: 'k8l6j58jl',
      name: 'Lime Band',
      description: 'Product Description',
      image: 'lime-band.jpg',
      price: 79,
      type: 'Fitness',
      quantity: 12,
      inventoryStatus: 'INSTOCK',
      rating: 3
    },
    {
      id: '1017',
      email: 'v435nn85n',
      name: 'Mini Speakers',
      description: 'Product Description',
      image: 'mini-speakers.jpg',
      price: 85,
      type: 'Clothing',
      quantity: 42,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1018',
      email: '09zx9c0zc',
      name: 'Painted Phone Case',
      description: 'Product Description',
      image: 'painted-phone-case.jpg',
      price: 56,
      type: 'Accessories',
      quantity: 41,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1019',
      email: 'mnb5mb2m5',
      name: 'Pink Band',
      description: 'Product Description',
      image: 'pink-band.jpg',
      price: 79,
      type: 'Fitness',
      quantity: 63,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1020',
      email: 'r23fwf2w3',
      name: 'Pink Purse',
      description: 'Product Description',
      image: 'pink-purse.jpg',
      price: 110,
      type: 'Accessories',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4
    },
    {
      id: '1021',
      email: 'pxpzczo23',
      name: 'Purple Band',
      description: 'Product Description',
      image: 'purple-band.jpg',
      price: 79,
      type: 'Fitness',
      quantity: 6,
      inventoryStatus: 'LOWSTOCK',
      rating: 3
    },
    {
      id: '1022',
      email: '2c42cb5cb',
      name: 'Purple Gemstone Necklace',
      description: 'Product Description',
      image: 'purple-gemstone-necklace.jpg',
      price: 45,
      type: 'Accessories',
      quantity: 62,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1023',
      email: '5k43kkk23',
      name: 'Purple T-Shirt',
      description: 'Product Description',
      image: 'purple-t-shirt.jpg',
      price: 49,
      type: 'Clothing',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 5
    },
    {
      id: '1024',
      email: 'lm2tny2k4',
      name: 'Shoes',
      description: 'Product Description',
      image: 'shoes.jpg',
      price: 64,
      type: 'Clothing',
      quantity: 0,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1025',
      email: 'nbm5mv45n',
      name: 'Sneakers',
      description: 'Product Description',
      image: 'sneakers.jpg',
      price: 78,
      type: 'Clothing',
      quantity: 52,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1026',
      email: 'zx23zc42c',
      name: 'Teal T-Shirt',
      description: 'Product Description',
      image: 'teal-t-shirt.jpg',
      price: 49,
      type: 'Clothing',
      quantity: 3,
      inventoryStatus: 'LOWSTOCK',
      rating: 3
    },
    {
      id: '1027',
      email: 'acvx872gc',
      name: 'Yellow Earbuds',
      description: 'Product Description',
      image: 'yellow-earbuds.jpg',
      price: 89,
      type: 'Electronics',
      quantity: 35,
      inventoryStatus: 'INSTOCK',
      rating: 3
    },
    {
      id: '1028',
      email: 'tx125ck42',
      name: 'Yoga Mat',
      description: 'Product Description',
      image: 'yoga-mat.jpg',
      price: 20,
      type: 'Fitness',
      quantity: 15,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1029',
      email: 'gwuby345v',
      name: 'Yoga Set',
      description: 'Product Description',
      image: 'yoga-set.jpg',
      price: 20,
      type: 'Fitness',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 8
    }
  ];

  selectedDemande!: any;

  selectDemande(demande: any) {
    console.log('selected demande', demande);
  }

  openDialog() {
    this._store.dispatch(OPEN({ dialogName: 'commentDialog' }));
  }
}
