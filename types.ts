
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ClientCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: React.ReactNode;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface BlogPost {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
}

export interface LeadershipProfile {
  name: string;
  role: string;
  bio: string;
  focus: string[];
  image: string;
}
