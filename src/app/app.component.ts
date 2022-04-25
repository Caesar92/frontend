import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public href: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if(((<NavigationEnd>event).url) == "/connexion" || 
        ((<NavigationEnd>event).url) == "/paiement" ||
        ((<NavigationEnd>event).url) == "/inscription" ) {
          this.href = true
        }else{
          this.href = false
        }
      }
  });
  }
}
