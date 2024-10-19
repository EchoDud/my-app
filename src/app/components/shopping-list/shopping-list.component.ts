import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Item {
  name: string;
  bought: boolean;
}

@Component({
  selector: 'app-shopping-list',
  standalone: true,  // Указываем, что компонент standalone
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  imports: [CommonModule, FormsModule],  // Импортируем CommonModule и FormsModule
})
export class ShoppingListComponent {
  newItemName = '';
  items: Item[] = [];

  addItem() {
    if (this.newItemName.trim()) {
      this.items.push({ name: this.newItemName, bought: false });
      this.newItemName = '';
    }
  }

  toggleItem(index: number) {
    this.items[index].bought = !this.items[index].bought;
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
