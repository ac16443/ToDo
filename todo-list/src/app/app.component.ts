import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface TodoItems 
{
    name:string;
    completed:boolean;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';
itemControl = new FormControl('');
items:TodoItems[] = [];



addItem():void
{
    const value= this.itemControl.value?.trim();
      if(!value)
      {
        return;  
      }

    this.items.push({
      name:value,
      completed:false
    });

  this.itemControl.reset();
}

toggleItem(item:TodoItems):void
{
    item.completed = !item.completed;
}

get remainingCount(): number
{
    return this.items.filter(item => !item.completed).length;
}

}
