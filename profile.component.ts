import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = { name: '', email: '', phone: '' };

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getUserProfile('USER_ID').subscribe(data => {
      this.user = data;
    });
  }

  updateProfile() {
    this.profileService.updateUserProfile('USER_ID', this.user).subscribe(updatedData => {
      this.user = updatedData;
    });
  }
}
