import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  // SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
  site: {
    website: 'https://kristinjinks.com/', // Site domain
    title: 'Kristin Jinks', // Site title
    author: 'Kristin Jinks', // Author name
    description: 'Marine science research, estuarine food webs, and fisheries insights', // Site description
    language: 'en-US', // Default language
    semanticScholarAuthorId: '35641950' // Semantic Scholar author ID
  },

  // GENERAL SETTINGS ////////////////////////////////////////////////////////////////////////////////////
  general: {
    contentWidth: '42rem', // Content area width
    centeredLayout: true, // Use centered layout (false for left-aligned)
    themeToggle: false, // Show theme toggle button (uses system theme by default)
    postListDottedDivider: false, // Show dotted divider in post list
    footer: true, // Show footer
    fadeAnimation: true, // Enable fade animations
    fishAnimation: true // Enable swimming fish animation
  },

  // DATE SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  date: {
    dateFormat: 'YYYY-MM-DD', // Date format: YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
    dateSeparator: '.', // Date separator: . - / (except for MONTH DAY YYYY and DAY MONTH YYYY)
    dateOnRight: true // Date position in post list (true for right, false for left)
  },

  // POST SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  post: {
    readingTime: false, // Show reading time in posts
    toc: true, // Show the table of contents (when there is enough page width)
    imageViewer: true, // Enable image viewer
    copyCode: true // Enable copy button in code blocks
  }
}
