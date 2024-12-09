import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  'html, body': {
    maxWidth: '100vw',
    scrollBehavior: 'smooth',
    marginBottom: '50px',

    // maxWidth: '1024px',
    // overflowX: 'hidden',
  },

  body: {
    // marginBottom: '50px',
    /* background-color: #f6f6f6; */
    // backgroundColor: '#f3f3f3',
  },

  '*': {
    // boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  a: {
    color: '#000',
    textDecoration: 'none',
  },

  'a:hover': {
    color: '#000',
    textDecoration: 'none',
  },

  ul: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },

  li: {
    listStyleType: 'none',
  },

  button: {
    cursor: 'pointer',
  },

  select: {
    padding: '6px',
    borderColor: '#ccc',
    borderRadius: '4px',
    fontSize: '1.05rem',
  },
});
