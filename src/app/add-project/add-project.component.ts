import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ProjectService]
})

export class AddProjectComponent implements OnInit {
  addForm: boolean = false;
  showAddForm() {
    if(this.addForm === true) {
      this.addForm = false;
    } else {
      this.addForm = true;
    }
  }

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string,
    manager: string,
    description: string,
    totalAmount: number,
    currentAmount: number,
    detail: string,
    type: string,
    reward: string,
    image: string) {
    const NEWPROJECT: Project = new Project(title, manager, description, totalAmount, currentAmount, detail, type, reward, image);
    this.projectService.addProject(NEWPROJECT);

  }
}
