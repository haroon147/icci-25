export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  // Conference Info
  getConferenceInfo: '/conference/info',
  updateConferenceInfo: '/admin/conference/info',

  // Speakers
  getSpeakers: '/speakers',
  createSpeaker: '/admin/speakers',
  updateSpeaker: (id) => `/admin/speakers/${id}`,
  deleteSpeaker: (id) => `/admin/speakers/${id}`,

  // Committee Members
  getCommittee: '/committee',
  createCommitteeMember: '/admin/committee',
  updateCommitteeMember: (id) => `/admin/committee/${id}`,
  deleteCommitteeMember: (id) => `/admin/committee/${id}`,

  // Schedule
  getSchedule: '/schedule',
  createScheduleItem: '/admin/schedule',
  updateScheduleItem: (id) => `/admin/schedule/${id}`,
  deleteScheduleItem: (id) => `/admin/schedule/${id}`,

  // Sponsors
  getSponsors: '/sponsors',
  createSponsor: '/admin/sponsors',
  updateSponsor: (id) => `/admin/sponsors/${id}`,
  deleteSponsor: (id) => `/admin/sponsors/${id}`,

  // Partners
  getPartners: '/partners',
  createPartner: '/admin/partners',
  updatePartner: (id) => `/admin/partners/${id}`,
  deletePartner: (id) => `/admin/partners/${id}`,

  // News
  getNews: '/news',
  createNews: '/admin/news',
  updateNews: (id) => `/admin/news/${id}`,
  deleteNews: (id) => `/admin/news/${id}`,

  // Gallery
  getGallery: '/gallery',
  createGalleryItem: '/admin/gallery',
  deleteGalleryItem: (id) => `/admin/gallery/${id}`,

  // Papers
  submitPaper: '/papers/submit',
  getPapers: '/admin/papers',
  getPaper: (id) => `/admin/papers/${id}`,
  updatePaperStatus: (id) => `/admin/papers/${id}/status`,

  // Registration
  register: '/registration',
  getRegistrations: '/admin/registrations',

  // Contact
  contact: '/contact',
  getMessages: '/admin/messages',

  // Auth
  login: '/auth/login',
  logout: '/auth/logout',
  verify: '/auth/verify',

  // Users
  getUsers: '/admin/users',
  updateUser: (id) => `/admin/users/${id}`,
  deleteUser: (id) => `/admin/users/${id}`,
};
