/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  details: string[];
  features: string[];
}

export interface Appointment {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  serviceId: string;
  date: string;
  time: string;
  briefDescription: string;
  referenceId: string;
  createdAt: string;
}

export interface FeeItem {
  id: string;
  category: 'Oaths' | 'Consultancy' | 'Advocacy';
  name: string;
  description: string;
  estimatedCost: string;
  note: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
