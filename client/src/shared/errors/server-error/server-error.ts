import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiError } from '../../../types/errors';

@Component({
  selector: 'app-server-error',
  imports: [],
  templateUrl: './server-error.html',
  styleUrl: './server-error.css'
})
export class ServerError {
  protected error: ApiError;
  private router = inject(Router);
  protected showDetails = false;

  constructor(){
    const navidation = this.router.getCurrentNavigation();
    this.error = navidation?.extras?.state?.['error'];
  }
  detailsToggle(){
    this.showDetails = !this.showDetails;
    
  }
}
