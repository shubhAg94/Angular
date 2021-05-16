import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  //Most pipe 
  course = {
    title: "anguLAR couRSE",
    author: "Shubham Kumar",
    rating: 4.8123,
    students: 30001,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1),
    obj: { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } }
  }

  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae fugit ducimus. Modi ad doloremque repudiandae similique ipsum. Exercitationem, quod.";

  // Maximilian custom pipe --> filter
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];

  filteredStatus = '';
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });
  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    //Pipe will not run chenge detection as source does not change(and it is pure pipe)
    // this.servers.push({
    //   instanceType: 'small',
    //   name: 'New Server',
    //   status: this.filteredStatus,
    //   started: new Date(15, 1, 2017)
    // });
    // console.log(this.servers);

    
    const cloneServer = [...this.servers];
    cloneServer.push({
      instanceType: 'small',
      name: 'New Server',
      status: this.filteredStatus,
      started: new Date(15, 1, 2017)
    });
    this.servers = cloneServer;
  }
}
