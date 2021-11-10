import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';

const ITEMS: Item[] = [
  {
    id: '0',
    name: 'Item A-1',
    image: 'assets/images/A/A-1.png',
    category: 'A',
    featured: true,
    label: 'L-1',
    price: '4.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
  },
  {
    id: '1',
    name: 'Item B-1',
    image: 'assets/images/B/B-1.png',
    category: 'B',
    featured: true,
    label: 'L-2',
    price: '5.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
  },
  {
    id: '3',
    name: 'Item B-2',
    image: 'assets/images/B/B-2.png',
    category: 'B',
    featured: true,
    label: 'L-3',
    price: '6.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
  },
  {
    id: '4',
    name: 'Item C-1',
    image: 'assets/images/C/C-1.png',
    category: 'C',
    featured: false,
    label: 'L-4',
    price: '3.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
  },
  {
    id: '5',
    name: 'Item C-2',
    image: 'assets/images/C/C-2.png',
    category: 'C',
    featured: false,
    label: 'L-5',
    price: '8.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
  },
];
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  titleCatalog = 'Catalog';

  items = ITEMS;

  // selectedItem: Item = this.items[0];

  // items: Item[] = [
  //   {
  //     id: '0',
  //     name: 'Item A-1',
  //     image: '../assets/images/A/A-1.png',
  //     category: 'A',
  //     featured: true,
  //     label: 'L-1',
  //     price: '4.99',
  //     description: 'Lorem20',
  //   },
  //   {
  //     id: '0',
  //     name: 'Item A-1',
  //     image: '../assets/images/A/A-1.png',
  //     category: 'A',
  //     featured: true,
  //     label: 'L-1',
  //     price: '4.99',
  //     description: 'Lorem20',
  //   },
  //   {
  //     id: '0',
  //     name: 'Item A-1',
  //     image: '../assets/images/A/A-1.png',
  //     category: 'A',
  //     featured: true,
  //     label: 'L-1',
  //     price: '4.99',
  //     description: 'Lorem20',
  //   },
  //   {
  //     id: '0',
  //     name: 'Item A-1',
  //     image: '../assets/images/A/A-1.png',
  //     category: 'A',
  //     featured: true,
  //     label: 'L-1',
  //     price: '4.99',
  //     description: 'Lorem20',
  //   },
  //   {
  //     id: '0',
  //     name: 'Item A-1',
  //     image: '../assets/images/A/A-1.png',
  //     category: 'A',
  //     featured: true,
  //     label: 'L-1',
  //     price: '4.99',
  //     description: 'Lorem20',
  //   },
  // ];

  constructor() {}

  ngOnInit(): void {}
}
