import { Component, input } from '@angular/core';
import{ template,init_value } from './interface'

@Component({
  selector: 'app-project-temp',
  imports: [],
  templateUrl: './project-temp.html',
  styleUrl: './project-temp.css',
})
export class ProjectTemp {
  details = input<template>(init_value);
}
