// src/app/pages/example/create.example.ts

import { CreateTheConnectionLocal, LocalSyncData, MakeTheInstanceConceptLocal, PatcherStructure, PRIVATE, UpdateComposition } from "mftsccs-browser";
import { StatefulWidget } from "../../default/StatefulWidget";
import  './task.style.css';
import { getLocalUserId } from "../user/login.service";
export class create extends StatefulWidget{
    addEvents(): void {
        let userId:number = getLocalUserId();
        let order: 1;
        let name = this.getElementById("name") as HTMLInputElement;
        let id = this.getElementById("id") as HTMLInputElement;
        if(this.data){
            name.value = this.data.name;
            id.value = this.data.id;
        }
        let submitButton = this.getElementById("submit");
        if(submitButton){
            submitButton.onclick = (ev: Event) => {
                ev.preventDefault();
    
                if(id.value){
                    let patcherStructure: PatcherStructure = new PatcherStructure();
                    patcherStructure.compositionId = Number(id.value);
                    patcherStructure.patchObject = {
                        "name": name.value,
                    }
                    UpdateComposition(patcherStructure);
                }
                else{
                    MakeTheInstanceConceptLocal("the_task", "", true,userId,PRIVATE).then((mainconcept)=> {
                        MakeTheInstanceConceptLocal("name", name.value,false, userId, PRIVATE).then((concept)=>{
                                CreateTheConnectionLocal(mainconcept.id, concept.id, mainconcept.id, order, "", userId).then(()=>{
                                        LocalSyncData.SyncDataOnline();
                                })
                        });
                    });
                }
    
    
                console.log("submit button clicked");
            }
        }

    }

     getHtml(): string {
        let html = "";
        html = `<div class="container">
        <form>
            <div>
                <input type= number id=id hidden>
                <div class="formbody">
                    <label> name </label>
                    <input  type = text id="name" placeholder="task name">
                </div>
                
                <button class=" btn btn-primary" id="submit" type=submit>Submit</button>
            </div>
        </form>

        </div>`
        return html;
    }
}