// src/app/pages/example/list.example.ts

import {  DeleteConceptById, GetCompositionListListener,  NORMAL } from "mftsccs-browser";
import { StatefulWidget } from "../../default/StatefulWidget";
import { getLocalUserId } from "../user/login.service";
import  './task.style.css';
export class list extends StatefulWidget{
    tasks: any = [];
    inpage: number= 10;
    page: number = 1;
    linker: string = "console_folder_s";


    widgetDidMount(): void {
        let userId: number = getLocalUserId();
        GetCompositionListListener("the_task", userId, this.inpage, this.page, NORMAL).subscribe((output: any)=>{
            this.tasks = output;
            this.render();
        })
    }




    addEvents() {
      let tableElement = this.getElementById("mainbody");
      if(tableElement){
        console.log("this is the element", tableElement);
        if(this.tasks.length > 0){
          for(let i= 0; i< this.tasks.length; i++){
            let id = this.tasks[i].the_task.id;


            if(id){
                let row = document.createElement("tr");
                let col1 = document.createElement("td");
                let col2 = document.createElement("td");
                let col3 = document.createElement("td");
                let name = document.createElement("span");
                let nameValue = this.tasks[i].the_task.name
                name.innerHTML = nameValue;
                let edit = document.createElement("button");
      
                edit.setAttribute('class', 'btn btn-primary');
                edit.setAttribute('padding', "10px");
                edit.id = this.tasks[i].the_task.id;
                edit.innerHTML = "edit";
      
                let del = document.createElement("button");
                del.setAttribute('class', 'btn btn-primary');
                del.setAttribute('padding', "10px");
                del.id = this.tasks[i].the_task.id;
                del.innerHTML = "Delete";
                del.onclick = () =>{
                    if(id){
                        DeleteConceptById(id).then(()=>{
                            console.log("this is the delete notify");
                          });
                    }
    
      
                }
                let that = this;
                edit.onclick = () =>{
                  that.data = {
                    "id": edit.id,
                    "name": nameValue,
                  }
                  console.log("this is the update click", that.data, that.subscribers);
                  
                  that.notify();
                }

                col1.append(name);
                col2.append(del);
                col3.append(edit);
      
                row.appendChild(col1);
                row.appendChild(col2);
                row.appendChild(col3);
                tableElement.append(row);
            }
            
          }
      }



      }

      }



     getHtml(): string {

        let html = "";

        html = `<div>
        <table>
        <thead>
          <tr>
              <th>name</th>
              <th>Delete</th>
              <th>Edit</th>
          </tr>
        </thead>
        <tbody id= mainbody>

        </tbody>
        </table>
        
        </div>`
        return html;
    }
}