import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectusService {
  private apiUrl = 'http://localhost:8055'; // Update with your Directus API URL

  constructor(private http: HttpClient) {}

  // Method to get all memes
  getMemes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/items/memes`);
  }

  // Method to get a single meme by ID
  getMemeById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/items/memes/${id}`);
  }

  // Method to create a new meme
  createMeme(memeData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/items/memes`, memeData);
  }

  // Method to update an existing meme
  updateMeme(id: number, memeData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/items/memes/${id}`, memeData);
  }

  // Method to delete a meme
  deleteMeme(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/items/memes/${id}`);
  }

  // Method to get user profiles
  getUserProfiles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/items/profile`);
  }

  // Method to create a new user profile
  createUserProfile(profileData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/items/profile`, profileData);
  }

  // Method to update an existing user profile
  updateUserProfile(id: number, profileData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/items/profile/${id}`, profileData);
  }

  // Method to delete a user profile
  deleteUserProfile(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/items/profile/${id}`);
  }
}